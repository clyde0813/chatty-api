import datetime
import random
from random import choice
import logging
from django.core import mail
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status, generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from users.models import Profile
from .models import Question, Answer, AdjectiveList, NounList
from .serializers import QuestionSerializer, QuestionCreateSerializer, QuestionRejectedSerializer, \
    AnswerCreateSerializer, TimelineSerializer
from config.ip_address_gatherer import get_client_ip
import threading

logger = logging.getLogger('chatty')


def send_mail(subject, message, recipient_list, from_email, fail_silently):
    mail.send_mail(subject=subject, message=message, recipient_list=recipient_list, from_email=from_email,
                   fail_silently=fail_silently)


class CustomPagination(PageNumberPagination):
    page_size = 5

    def get_paginated_response(self, data):
        return Response({'next': self.page.next_page_number() if self.page.has_next() else None,
                         'previous': self.page.previous_page_number() if self.page.has_previous() else None,
                         'results': data})


class QuestionGetAPIView(generics.GenericAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    @swagger_auto_schema(tags=['질문 리스트'])
    def get(self, request, username):
        if Profile.objects.filter(user__username=username).exists():
            instance = self.queryset.filter(target_profile__user__username=username, answer__isnull=False,
                                            refusal_status=False, delete_status=False).order_by('-answer__created_date')
            paginator = CustomPagination()
            result_page = paginator.paginate_queryset(instance, request)
            serializer = QuestionSerializer(result_page, many=True)
            logger.info('Question Get Success Username : ' + str(username) + ' IP : ' + str(get_client_ip(request)))
            return paginator.get_paginated_response(serializer.data)
        else:
            logger.error('Question Get Failed Username : ' + str(username) + ' IP : ' + str(get_client_ip(request)))
            return Response({'error': '존재하지 않는 유저입니다.'}, status=status.HTTP_404_NOT_FOUND)


class QuestionCreateAPIView(generics.GenericAPIView):
    serializer_class = QuestionCreateSerializer

    @swagger_auto_schema(tags=['질문 등록'])
    def post(self, request):
        serializer = QuestionCreateSerializer(data=request.data)
        if serializer.is_valid():
            target_profile = Profile.objects.get(user__username=serializer.validated_data['username'])
            question_object = serializer.save(author_ip=get_client_ip(request), refusal_status=False,
                                              target_profile=target_profile,
                                              nickname=choice(AdjectiveList.objects.values_list('word'))[0] + ' ' +
                                                       choice(NounList.objects.values_list('word'))[0])
            logger.info('Question Post Success Target : ' + str(serializer.validated_data['target_profile']) +
                        ' Content : ' + str(question_object.content) + ' IP : ' + str(get_client_ip(request)))
            return Response(
                {'info': '등록완료', 'pk': question_object.pk, 'nickname': question_object.nickname,
                 'content': question_object.content,
                 'created_date': question_object.created_date,
                 'target_profile': question_object.target_profile.user.username},
                status=status.HTTP_200_OK)
        else:
            logger.error('Question Post Failed IP : ' + str(get_client_ip(request)))
            return Response({'error': '질문 등록 실패'}, status=status.HTTP_400_BAD_REQUEST)

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
                return Response({'error': '해당 질문 없음'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            logger.error('Question Delete Failed - Unauthorized IP : ' + str(get_client_ip(request)))
            return Response({'error': '로그인 후 이용가능합니다'}, status=status.HTTP_400_BAD_REQUEST)


class QuestionUnansweredAPIView(generics.GenericAPIView):
    queryset = Question.objects.all()

    @swagger_auto_schema(tags=['미답변 질문 리스트'])
    def get(self, request):
        if request.user.is_authenticated:
            instance = self.queryset.filter(target_profile__user=self.request.user, answer__isnull=True,
                                            refusal_status=False, delete_status=False).order_by('-created_date')
            paginator = CustomPagination()
            result_page = paginator.paginate_queryset(instance, request)
            serializer = QuestionSerializer(result_page, many=True)
            logger.info('Question Unanswered Get Success Username : ' + str(request.user.username) + ' IP : ' +
                        str(get_client_ip(request)))
            return paginator.get_paginated_response(serializer.data)
        else:
            logger.error('Question Unanswered Get Failed - Unauthorized IP : ' + str(get_client_ip(request)))
            return Response({'error': '로그인 후 이용가능합니다'}, status=status.HTTP_400_BAD_REQUEST)


class QuestionRejectedAPIView(generics.GenericAPIView):
    serializer_class = QuestionRejectedSerializer
    queryset = Question.objects.all()

    @swagger_auto_schema(tags=['거절 질문 리스트'])
    def get(self, request):
        if request.user.is_authenticated:
            instance = self.queryset.filter(target_profile__user=self.request.user, answer__isnull=True,
                                            refusal_status=True, delete_status=False).order_by('-created_date')
            paginator = CustomPagination()
            result_page = paginator.paginate_queryset(instance, request)
            serializer = QuestionSerializer(result_page, many=True)
            logger.info('Question Rejected Get Success Username : ' + str(request.user.username) + ' IP : ' +
                        str(get_client_ip(request)))
            return paginator.get_paginated_response(serializer.data)
        else:
            logger.error('Question Rejected Get Failed - Unauthorized IP : ' + str(get_client_ip(request)))
            return Response({'error': '로그인 후 이용가능합니다'}, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(tags=['질문 거절'])
    def post(self, request):
        if request.user.is_authenticated:
            question_object = Question.objects.filter(target_profile__user=request.user,
                                                      pk=request.data['question_id'],
                                                      answer__isnull=True, refusal_status=False, delete_status=False)
            if question_object.exists() is True:
                question_data = question_object.get()
                question_object.update(refusal_status=True)
                logger.info('Question Rejected Post Success Username : ' + str(request.user.username) + ' IP : ' +
                            str(get_client_ip(request)))
                return Response({'info': '질문 거절 완료', 'pk': question_data.pk, 'nickname': question_data.nickname,
                                 'content': question_data.content,
                                 'created_date': question_data.created_date,
                                 'target_profile': question_data.target_profile.user.username},
                                status=status.HTTP_200_OK)
            else:
                logger.error(
                    'Question Reject Failed - No Question Username : ' + str(request.user.username) + ' IP : ' +
                    str(get_client_ip(request)))
                return Response({'error': '해당 질문이 존재하지 않습니다.'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            logger.error('Question Reject Failed - Unauthorized IP : ' + str(get_client_ip(request)))
            return Response({'error': '로그인 후 이용가능합니다'}, status=status.HTTP_400_BAD_REQUEST)


class AnswerCreateAPIView(generics.GenericAPIView):
    serializer_class = AnswerCreateSerializer

    @swagger_auto_schema(tags=['답변 등록'])
    def post(self, request):
        if request.user.is_authenticated:
            question_instance = Question.objects.filter(target_profile__user=request.user,
                                                        pk=request.data['question_id'], answer__isnull=True,
                                                        refusal_status=False, delete_status=False)
            if question_instance.exists() is True:
                # 자문자답 임시 허용
                # if question_instance.get().author_ip != get_client_ip(request):
                question_data = question_instance.get()
                Answer.objects.create(question_id=request.data['question_id'],
                                      author_profile=Profile.objects.get(user=request.user),
                                      author_ip=get_client_ip(request), content=request.data['content'])
                logger.info('Answer Post Success Username : ' + str(request.user.username) + ' IP : ' +
                            str(get_client_ip(request)))
                return Response({'info': '답변 등록 완료', 'pk': question_data.pk, 'nickname': question_data.nickname,
                                 'content': question_data.content,
                                 'created_date': question_data.created_date,
                                 'target_profile': question_data.target_profile.user.username},
                                status=status.HTTP_200_OK)
            else:
                logger.error('Answer Post Failed - No Question Username : ' + str(request.user.username) + ' IP : ' +
                             str(get_client_ip(request)))
                return Response({'error': '해당 질문이 존재하지 않습니다.'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            logger.error('Answer Post Failed - Unauthorized IP : ' + str(get_client_ip(request)))
            return Response({'error': '로그인 후 이용가능합니다'}, status=status.HTTP_400_BAD_REQUEST)


class TimelineAPIView(generics.GenericAPIView):
    queryset = Question.objects.all()

    @swagger_auto_schema(tags=['타임라인'])
    def get(self, request):
        if request.user.is_authenticated:
            instance = self.queryset.filter(
                target_profile__user__in=Profile.objects.filter(user=request.user).get().following.distinct(),
                answer__isnull=False, delete_status=False, refusal_status=False) \
                .order_by("-answer__created_date").all()
            serializer = TimelineSerializer(instance, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'error': '로그인 후 이용가능합니다'}, status=status.HTTP_400_BAD_REQUEST)
