from django.shortcuts import get_object_or_404

from rest_framework import viewsets

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from users.models import Profile
from .models import Question, Answer
from .permissions import CustomReadOnly
from .serializers import QuestionSerializer, QuestionCreateSerializer, AnswerSerializer, AnswerCreateSerializer
from chatty_drf.ip_address_gatherer import get_client_ip


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()

    def get_serializer_class(self):
        if self.action == 'list' or 'retrieve':
            return QuestionSerializer
        return QuestionCreateSerializer

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            author_profile = Profile.objects.get(username=self.request.user)
            author_ip = get_client_ip(self.request)
            serializer.save(author_profile=author_profile, author_ip=author_ip)
        else:
            author_ip = get_client_ip(self.request)
            serializer.save(author_ip=author_ip)
