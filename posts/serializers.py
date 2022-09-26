from rest_framework import serializers

from users.serializers import ProfileSerializer
from .models import Question, Answer


class AnswerSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = Answer
        fields = ('pk', 'author', 'content', 'created_date')


class AnswerCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('question', 'content')


class QuestionSerializer(serializers.ModelSerializer):
    author_profile = ProfileSerializer(read_only=True)
    author_ip = serializers.CharField(read_only=True)
    answer = AnswerSerializer(many=True, read_only=True)
    refusal_status = serializers.BooleanField(read_only=True)

    class Meta:
        model = Question
        fields = (
            'pk', 'author_profile', 'author_ip', 'target_profile', 'content', 'refusal_status', 'created_date',
            'answer')


class QuestionCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('content',)
