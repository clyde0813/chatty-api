import datetime
import logging

from django.conf import settings
from django.db.models import Q
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView

from user.models import Profile, APNsDevice
from .models import Question, Answer, QuestionReport
from user.models import Follow
from .serializers import QuestionSerializer, QuestionCreateSerializer
from config.ip_address_gatherer import get_client_ip
from firebase_admin import messaging

from tasks.Push.firebase_messaging import fcm_send

from Exceptions.UnauthorizedExceptions import *
from Exceptions.BaseExceptions import *

from Permissions.UserAccessPermission import IsQuestionTarget, IsAuthenticated

from Pagination.CustomPagination import FivePerPagePaginator

logger = logging.getLogger('chatty')


class QuestionGetAPIView(APIView):
    queryset = Question.objects.filter(answer__isnull=False, refusal_status=False, delete_status=False,
                                       target_profile__is_active=True) \
        .filter(Q(author_profile__isnull=True) | Q(author_profile__is_active=True))
    serializer_class = QuestionSerializer

    @swagger_auto_schema(tags=['질문 리스트'])
    def get(self, request, username):
        if Profile.objects.filter(user__username=username).exists():
            instance = self.queryset.filter(target_profile__user__username=username).order_by('-answer__created_date')
            paginator = FivePerPagePaginator()
            result_page = paginator.paginate_queryset(instance, request)
            serializer = QuestionSerializer(result_page, many=True)
            logger.info('Question Get Success Username : ' + str(username) + ' IP : ' + str(get_client_ip(request)))
            return paginator.get_paginated_response(serializer.data)
        else:
            logger.error('Question Get Failed Username : ' + str(username) + ' IP : ' + str(get_client_ip(request)))
            raise DataInaccuracyError()


class QuestionCreateAPIView(generics.GenericAPIView):
    serializer_class = QuestionCreateSerializer

    @swagger_auto_schema(tags=['질문 등록'])
    def post(self, request):
        serializer = QuestionCreateSerializer(data=request.data)
        if serializer.is_valid():
            if request.user.is_authenticated:
                author_profile = request.user.profile
                anonymous_status = serializer.validated_data['anonymous_status']
            else:
                author_profile = None
                anonymous_status = True
            target_profile = Profile.objects.get(user__username=serializer.validated_data['username'])
            Question.objects.create(author_ip=get_client_ip(request), refusal_status=False,
                                    target_profile=target_profile, author_profile=author_profile,
                                    anonymous_status=anonymous_status, content=serializer.validated_data['content'])
            logger.info('Question Post Success Target : ' + str(serializer.validated_data['username']) +
                        ' Content : ' + str(serializer.validated_data['content']) + ' IP : ' + str(
                get_client_ip(request)))
            fcm_send.delay(ipAddress=get_client_ip(request), username=str(serializer.validated_data['username']),
                           msg="새로운 질문이 도착했어요!")
            return Response({'info': '질문 등록완료'}, status=status.HTTP_200_OK)
        else:
            logger.error('Question Post Failed IP : ' + str(get_client_ip(request)))
            raise DataInaccuracyError()

    @swagger_auto_schema(tags=['질문 삭제'])
    def delete(self, request):
        if request.user.is_authenticated:
            question_object = Question.objects.filter(target_profile__user=request.user,
                                                      pk=request.data['question_id'], delete_status=False)
            if question_object.exists() is True:
                question_object.update(delete_status=True)
                logger.info('Question Delete Success Username : ' + str(request.user.username) + ' IP : ' +
                            str(get_client_ip(request)))
                return Response({'info': '질문 삭제 완료'}, status=status.HTTP_200_OK)
            else:
                logger.error(
                    'Question Delete Failed - No Question Username : ' + str(request.user.username) + ' IP : ' +
                    str(get_client_ip(request)))
                raise DataInaccuracyError()
        else:
            logger.error('Question Delete Failed - Unauthorized IP : ' + str(get_client_ip(request)))
            raise UnauthorizedError()


class QuestionArrivedAPIView(generics.GenericAPIView):
    queryset = Question.objects.filter(answer__isnull=True, refusal_status=False, delete_status=False,
                                       target_profile__is_active=True) \
        .filter(Q(author_profile__isnull=True) | Q(author_profile__is_active=True))
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated, IsQuestionTarget]

    @swagger_auto_schema(tags=['미답변 질문 리스트'])
    def get(self, request):
        instance = self.queryset.filter(target_profile__user=self.request.user).order_by('-created_date')
        paginator = FivePerPagePaginator()
        result_page = paginator.paginate_queryset(instance, request)
        serializer = QuestionSerializer(result_page, many=True)
        logger.info('Question Unanswered Get Success Username : ' + str(request.user.username) + ' IP : ' +
                    str(get_client_ip(request)))
        return paginator.get_paginated_response(serializer.data)


class QuestionRefuseAPIView(APIView):
    queryset = Question.objects.filter(answer__isnull=True, delete_status=False,
                                       target_profile__is_active=True) \
        .filter(Q(author_profile__isnull=True) | Q(author_profile__is_active=True))
    permission_classes = [IsAuthenticated, IsQuestionTarget]

    refuse_params = openapi.Schema(type=openapi.TYPE_OBJECT, properties={
        'question_id': openapi.Schema(type=openapi.TYPE_INTEGER, description="question_id")})

    def get_object(self):
        try:
            obj = self.queryset.get(pk=self.request.data['question_id'], refusal_status=False)
            self.check_object_permissions(self.request, obj)
            return obj
        except Exception as e:
            logger.error('Object 404 - IP : ' + str(get_client_ip(self.request)))
            raise DataInaccuracyError()

    @swagger_auto_schema(tags=['거절 질문 리스트'])
    def get(self, request):
        instance = self.queryset.filter(target_profile__user=self.request.user, refusal_status=True) \
            .order_by('-refused_date')
        paginator = FivePerPagePaginator()
        result_page = paginator.paginate_queryset(instance, request)
        serializer = QuestionSerializer(result_page, many=True)
        logger.info('Question Rejected Get Success Username : ' + str(request.user.username) + ' IP : ' +
                    str(get_client_ip(request)))
        return paginator.get_paginated_response(serializer.data)

    @swagger_auto_schema(tags=['질문 거절'], request_body=refuse_params)
    def post(self, request):
        question = self.get_object()
        question.refusal_status = True
        question.refused_date = datetime.datetime.now()
        question.save()
        logger.info('Question Rejected Post Success Username : ' + str(request.user.username) + ' IP : ' +
                    str(get_client_ip(request)))
        return Response({'info': '질문 거절 완료', 'pk': question.pk,
                         'content': question.content,
                         'created_date': question.created_date,
                         'target_profile': question.target_profile.user.username},
                        status=status.HTTP_200_OK)


class QuestionReportView(generics.GenericAPIView):
    queryset = QuestionReport
    permission_classes = [IsAuthenticated]
    report_params = openapi.Schema(type=openapi.TYPE_OBJECT, properties={
        'question_id': openapi.Schema(type=openapi.TYPE_INTEGER, description="question_id"),
    })

    @swagger_auto_schema(tags=['질문 신고'], request_body=report_params)
    def post(self, request):
        if Question.objects.filter(pk=request.data['question_id']).exists():
            if self.queryset.objects.filter(author=request.user.profile,
                                            question_id=request.data['question_id']).exists() is False:
                self.queryset.objects.create(author=request.user.profile, question_id=request.data['question_id'])
            return Response({'info': '질문 신고 완료'}, status=status.HTTP_200_OK)
        else:
            raise DataInaccuracyError()


class AnswerCreateAPIView(APIView):
    queryset = Question.objects.filter(answer__isnull=True, refusal_status=False, delete_status=False,
                                       target_profile__is_active=True) \
        .filter(Q(author_profile__isnull=True) | Q(author_profile__is_active=True))
    permission_classes = [IsAuthenticated, IsQuestionTarget]

    answer_params = openapi.Schema(type=openapi.TYPE_OBJECT, properties={
        'question_id': openapi.Schema(type=openapi.TYPE_INTEGER, description="question_id"),
        'content': openapi.Schema(type=openapi.TYPE_STRING, description="content")
    })

    def get_object(self):
        try:
            obj = self.queryset.get(pk=self.request.data['question_id'])
            self.check_object_permissions(self.request, obj)
            return obj
        except Exception as e:
            logger.error('Object 404 - IP : ' + str(get_client_ip(self.request)))
            raise DataInaccuracyError()

    @swagger_auto_schema(tags=['답변 등록'], request_body=answer_params)
    def post(self, request):
        question = self.get_object()
        Answer.objects.create(question_id=request.data['question_id'],
                              author_profile=request.user.profile,
                              author_ip=get_client_ip(request), content=request.data['content'])
        if question.author_profile is not None:
            fcm_send.delay(ipAddress=get_client_ip(request), username=str(question.author_profile.user.username),
                           msg="답변이 도착했어요!")
        logger.info('Answer Post Success Username : ' + str(request.user.username) + ' IP : ' +
                    str(get_client_ip(request)))
        return Response({'info': '답변 등록 완료', 'pk': question.pk,
                         'content': question.content,
                         'created_date': question.created_date,
                         'target_profile': question.target_profile.user.username},
                        status=status.HTTP_200_OK)


class TimelineAPIView(generics.GenericAPIView):
    queryset = Question.objects.filter(answer__isnull=False, refusal_status=False, delete_status=False,
                                       target_profile__is_active=True) \
        .filter(Q(author_profile__isnull=True) | Q(author_profile__is_active=True))
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(tags=['타임라인'])
    def get(self, request):
        instance = self.queryset.filter(
            target_profile__in=Follow.objects.filter(follower=request.user.profile).values_list('following')) \
            .order_by("-answer__created_date").all()
        paginator = FivePerPagePaginator()
        result_page = paginator.paginate_queryset(instance, request)
        serializer = QuestionSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)
