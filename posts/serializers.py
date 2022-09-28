from rest_framework import serializers

from users.serializers import ProfileSerializer
from .models import Question, Answer
from users.models import Profile


class AnswerCreateSerializer(serializers.ModelSerializer):
    question_id = serializers.IntegerField(required=True, write_only=True)
    content = serializers.CharField(required=True, write_only=True)

    class Meta:
        model = Answer
        fields = ('question_id', 'content')


class QuestionSerializer(serializers.ModelSerializer):
    author_profile = ProfileSerializer(read_only=True)
    answer_content = serializers.CharField(read_only=True, source='answer.content')

    class Meta:
        model = Question
        fields = (
            'pk', 'author_profile', 'author_ip', 'nickname', 'content', 'created_date',
            'answer_content')


class QuestionCreateSerializer(serializers.ModelSerializer):
    target_profile = serializers.CharField(required=True)
    content = serializers.CharField(max_length=100, required=True)

    def validate(self, data):
        if Profile.objects.filter(username__username=data['target_profile']).exists():
            return data
        raise serializers.ValidationError({'error': 'error'})

    class Meta:
        model = Question
        fields = ('target_profile', 'content',)


class QuestionRejectedSerializer(serializers.ModelSerializer):
    question_id = serializers.IntegerField(required=True)

    class Meta:
        model = Question
        fields = ('question_id',)
