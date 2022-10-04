from random import choice

from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from drf_yasg.utils import swagger_auto_schema
from rest_framework import viewsets, status
from rest_framework.generics import GenericAPIView, CreateAPIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from users.models import Profile
from .models import Question, Answer
from chats.models import NounList, AdjectiveList
from .permissions import CustomReadOnly
from .serializers import QuestionSerializer, QuestionCreateSerializer, QuestionRejectedSerializer, \
    AnswerCreateSerializer
from chatty_drf.ip_address_gatherer import get_client_ip
from collections import OrderedDict


class QuestionGetAPIView(GenericAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    @swagger_auto_schema(tags=['질문 리스트'])
    def get(self, request, username):
        if Profile.objects.filter(username__username=username).exists():
            instance = self.queryset.filter(target_profile__username__username=username, answer__isnull=False,
                                            refusal_status=False)
            serializer = QuestionSerializer(instance, many=True)
            return Response(serializer.data)
        else:
            return Response({'error': '존재하지 않는 유저입니다.'}, status=status.HTTP_404_NOT_FOUND)


class QuestionCreateAPIView(GenericAPIView):
    serializer_class = QuestionCreateSerializer

    @swagger_auto_schema(tags=['질문 등록'])
    def post(self, request):
        serializer = QuestionCreateSerializer(data=request.data)
        if serializer.is_valid():
            target_profile = Profile.objects.get(username__username=serializer.validated_data['target_profile'])
            if request.user.is_authenticated:
                serializer.save(author_profile=Profile.objects.get(username__username=request.user),
                                author_ip=get_client_ip(request), target_profile=target_profile)
            else:
                serializer.save(author_ip=get_client_ip(request), refusal_status=False, target_profile=target_profile,
                                nickname=choice(AdjectiveList.objects.values_list('word'))[0] + ' ' +
                                         choice(NounList.objects.values_list('word'))[0])
            return Response({'info': '등록완료'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': '등록실패'}, status=status.HTTP_400_BAD_REQUEST)


class QuestionUnansweredAPIView(GenericAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    @swagger_auto_schema(tags=['미답변 질문 리스트'])
    def get(self, request):
        try:
            instance = self.queryset.filter(target_profile__username=self.request.user, answer__isnull=True,
                                            refusal_status=False)
            serializer = QuestionSerializer(instance, many=True)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            return Response({'error': '사용자 없음'}, status=status.HTTP_400_BAD_REQUEST)


class QuestionRejectedAPIView(GenericAPIView):
    serializer_class = QuestionRejectedSerializer
    permission_classes = [IsAuthenticated]
    queryset = Question.objects.all()

    @swagger_auto_schema(tags=['거절 질문 리스트'])
    def get(self, request):
        try:
            instance = self.queryset.filter(target_profile__username=self.request.user, answer__isnull=True,
                                            refusal_status=True)
            serializer = QuestionSerializer(instance, many=True)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            return Response({'error': '사용자 없음'}, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(tags=['질문 거절'])
    def post(self, request):
        question_object = Question.objects.filter(target_profile__username=request.user, pk=request.data['question_id'],
                                                  answer__isnull=True, refusal_status=False)
        if question_object.exists() is True:
            question_object.update(refusal_status=True)
            return Response({'info': '질문 거절 완료'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': '400 error'}, status=status.HTTP_400_BAD_REQUEST)


class AnswerCreateAPIView(GenericAPIView):
    serializer_class = AnswerCreateSerializer
    permission_classes = [IsAuthenticated, ]

    @swagger_auto_schema(tags=['답변 등록'])
    def post(self, request):
        question_status = Question.objects.filter(target_profile__username=request.user,
                                                  pk=request.data['question_id'], answer__isnull=True,
                                                  refusal_status=False).exists()
        if question_status is True:
            Answer.objects.create(question_id=request.data['question_id'],
                                  author_profile=Profile.objects.get(username=request.user),
                                  author_ip=get_client_ip(request), content=request.data['content'])
            return Response({'info': '답변 등록 완료'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': '400 error'}, status=status.HTTP_400_BAD_REQUEST)
