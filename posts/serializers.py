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
    answer_content = serializers.CharField(read_only=True, source='answer.content')

    class Meta:
        model = Question
        fields = (
            'pk', 'nickname', 'content', 'created_date', 'answer_content')


class QuestionCreateSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True)
    content = serializers.CharField(max_length=100, required=True)

    def validate(self, data):
        if Profile.objects.filter(user__username=data['username']).exists():
            return data
        raise serializers.ValidationError({'error': '질문 대상이 잘못되었습니다.'})

    class Meta:
        model = Question
        fields = ('username', 'content',)


class QuestionRejectedSerializer(serializers.ModelSerializer):
    question_id = serializers.IntegerField(required=True)

    class Meta:
        model = Question
        fields = ('question_id',)


class TimelineSerializer(serializers.ModelSerializer):
    profile = serializers.SerializerMethodField()
    answer_content = serializers.CharField(source='answer.content')

    class Meta:
        model = Question
        fields = ('pk', 'profile', 'content', 'answer_content')

    def get_profile(self, obj):
        instance = Profile.objects.filter(user=obj.target_profile).get()
        serializer = ProfileSerializer(instance)
        return serializer.data
