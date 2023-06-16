import datetime
import logging
import os

from drf_yasg.utils import swagger_auto_schema
from rest_framework import status, generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from user.models import Profile, APNsDevice
from .models import Question, Answer
from user.models import Follow
from .serializers import QuestionSerializer, QuestionCreateSerializer, QuestionRefusedSerializer, \
    AnswerCreateSerializer
from config.ip_address_gatherer import get_client_ip
from firebase_admin import messaging

from Exceptions.UnauthorizedExceptions import *
from Exceptions.ChattyExceptions import *
from Exceptions.BaseExceptions import *

from Pagination.CustomPagination import FivePerPagePaginator

logger = logging.getLogger('chatty')


class QuestionGetAPIView(generics.GenericAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    @swagger_auto_schema(tags=['질문 리스트'])
    def get(self, request, username):
        if Profile.objects.filter(user__username=username).exists():
            instance = self.queryset.filter(target_profile__user__username=username, answer__isnull=False,
                                            refusal_status=False, delete_status=False).order_by('-answer__created_date')
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
        if request.user.is_authenticated:
            author_profile = request.user.profile
            anonymous_status = serializer.validated_data['anonymous_status']
        else:
            author_profile = None
            anonymous_status = True
        if serializer.is_valid():
            target_profile = Profile.objects.get(user__username=serializer.validated_data['target_profile'])
            question_object = serializer.save(author_ip=get_client_ip(request), refusal_status=False,
                                              target_profile=target_profile, author_profile=author_profile,
                                              anonymous_status=anonymous_status)
            logger.info('Question Post Success Target : ' + str(serializer.validated_data['target_profile']) +
                        ' Content : ' + str(question_object.content) + ' IP : ' + str(get_client_ip(request)))
            APNsDevice_list = list(
                APNsDevice.objects.filter(user=target_profile.user).values_list('token', flat=True))
            fcm_token_list = APNsDevice_list
            for i in fcm_token_list:
                try:
                    messaging.send(messaging.Message(
                        notification=messaging.Notification(
                            title='Chatty',
                            body='새로운 질문이 도착했어요!',
                        ),
                        token=i,
                    ))
                except Exception as e:
                    logger.error('APNs ' + str(e) + '\ntoken : ' + i)
                    APNsDevice.objects.get(token=i).delete()
            return Response(
                {'info': '등록완료', 'pk': question_object.pk,
                 'content': question_object.content,
                 'created_date': question_object.created_date,
                 'target_profile': question_object.target_profile.user.username},
                status=status.HTTP_200_OK)
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
    queryset = Question.objects.all()

    @swagger_auto_schema(tags=['미답변 질문 리스트'])
    def get(self, request):
        if request.user.is_authenticated:
            instance = self.queryset.filter(target_profile__user=self.request.user, answer__isnull=True,
                                            refusal_status=False, delete_status=False).order_by('-created_date')
            paginator = FivePerPagePaginator()
            result_page = paginator.paginate_queryset(instance, request)
            serializer = QuestionSerializer(result_page, many=True)
            logger.info('Question Unanswered Get Success Username : ' + str(request.user.username) + ' IP : ' +
                        str(get_client_ip(request)))
            return paginator.get_paginated_response(serializer.data)
        else:
            logger.error('Question Unanswered Get Failed - Unauthorized IP : ' + str(get_client_ip(request)))
            raise UnauthorizedError()


class QuestionRefusedAPIView(generics.GenericAPIView):
    serializer_class = QuestionRefusedSerializer
    queryset = Question.objects.all()

    @swagger_auto_schema(tags=['거절 질문 리스트'])
    def get(self, request):
        if request.user.is_authenticated:
            instance = self.queryset.filter(target_profile__user=self.request.user, answer__isnull=True,
                                            refusal_status=True, delete_status=False).order_by('-refused_date')
            paginator = FivePerPagePaginator()
            result_page = paginator.paginate_queryset(instance, request)
            serializer = QuestionSerializer(result_page, many=True)
            logger.info('Question Rejected Get Success Username : ' + str(request.user.username) + ' IP : ' +
                        str(get_client_ip(request)))
            return paginator.get_paginated_response(serializer.data)
        else:
            logger.error('Question Rejected Get Failed - Unauthorized IP : ' + str(get_client_ip(request)))
            raise UnauthorizedError()

    @swagger_auto_schema(tags=['질문 거절'])
    def post(self, request):
        serializer = self.get_serializer()
        if request.user.is_authenticated:
            question_object = Question.objects.filter(target_profile__user=request.user,
                                                      pk=request.data['question_id'],
                                                      answer__isnull=True, refusal_status=False, delete_status=False)
            if question_object.exists() is True:
                question_data = question_object.get()
                question_object.update(refused_date=datetime.datetime.now(), refusal_status=True)
                logger.info('Question Rejected Post Success Username : ' + str(request.user.username) + ' IP : ' +
                            str(get_client_ip(request)))
                return Response({'info': '질문 거절 완료', 'pk': question_data.pk,
                                 'content': question_data.content,
                                 'created_date': question_data.created_date,
                                 'target_profile': question_data.target_profile.user.username},
                                status=status.HTTP_200_OK)
            else:
                logger.error(
                    'Question Reject Failed - No Question Username : ' + str(request.user.username) + ' IP : ' +
                    str(get_client_ip(request)))
                raise DataInaccuracyError()
        else:
            logger.error('Question Reject Failed - Unauthorized IP : ' + str(get_client_ip(request)))
            raise UnauthorizedError()


class AnswerCreateAPIView(generics.GenericAPIView):
    serializer_class = AnswerCreateSerializer

    @swagger_auto_schema(tags=['답변 등록'])
    def post(self, request):
        if request.user.is_authenticated:
            question_instance = Question.objects.filter(target_profile__user=request.user,
                                                        pk=request.data['question_id'], answer__isnull=True,
                                                        refusal_status=False, delete_status=False)
            if question_instance.exists() is True:
                question_data = question_instance.get()
                Answer.objects.create(question_id=request.data['question_id'],
                                      author_profile=Profile.objects.get(user=request.user),
                                      author_ip=get_client_ip(request), content=request.data['content'])
                if question_data.author_profile is not None:
                    APNsDevice_list = list(
                        APNsDevice.objects.filter(user=question_data.author).values_list('token', flat=True))
                    fcm_token_list = APNsDevice_list
                    for i in fcm_token_list:
                        try:
                            messaging.send(messaging.Message(
                                notification=messaging.Notification(
                                    title='Chatty',
                                    body='답변이 도착했어요!',
                                ),
                                token=i,
                            ))
                        except Exception as e:
                            logger.error('APNs ' + str(e) + '\ntoken : ' + i)
                            APNsDevice.objects.get(token=i).delete()
                logger.info('Answer Post Success Username : ' + str(request.user.username) + ' IP : ' +
                            str(get_client_ip(request)))
                return Response({'info': '답변 등록 완료', 'pk': question_data.pk,
                                 'content': question_data.content,
                                 'created_date': question_data.created_date,
                                 'target_profile': question_data.target_profile.user.username},
                                status=status.HTTP_200_OK)
            else:
                logger.error('Answer Post Failed - No Question Username : ' + str(request.user.username) + ' IP : ' +
                             str(get_client_ip(request)))
                raise DataInaccuracyError()
        else:
            logger.error('Answer Post Failed - Unauthorized IP : ' + str(get_client_ip(request)))
            raise UnauthorizedError()


class TimelineAPIView(generics.GenericAPIView):
    queryset = Question.objects.all()

    @swagger_auto_schema(tags=['타임라인'])
    def get(self, request):
        if request.user.is_authenticated:
            instance = self.queryset.filter(
                target_profile__in=Follow.objects.filter(follower=request.user.profile).values_list('following'),
                answer__isnull=False, delete_status=False, refusal_status=False) \
                .order_by("-answer__created_date").all()
            paginator = FivePerPagePaginator()
            result_page = paginator.paginate_queryset(instance, request)
            serializer = QuestionSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        else:
            raise UnauthorizedError()
