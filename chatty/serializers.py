from rest_framework import serializers

from user.serializers import ProfileSerializer
from .models import Question, Answer
from user.models import Profile

from Exceptions.BaseExceptions import *


class AnswerCreateSerializer(serializers.ModelSerializer):
    question_id = serializers.IntegerField(required=True, write_only=True)
    content = serializers.CharField(required=True, write_only=True)

    class Meta:
        model = Answer
        fields = ('question_id', 'content')


class QuestionSerializer(serializers.ModelSerializer):
    answered_date = serializers.DateTimeField(source='answer.created_date')
    answer_content = serializers.CharField(read_only=True, source='answer.content')
    author = serializers.SerializerMethodField()
    profile = serializers.SerializerMethodField()
    class Meta:
        model = Question
        fields = (
            'pk', 'created_date', 'answered_date', 'profile', 'author', 'content', 'answer_content')

    def get_profile(self, obj):
        context = {
            "username": obj.target_profile.user.username,
            'profile_name': obj.target_profile.profile_name,
            "profile_image": obj.target_profile.profile_image.url,
            "background_image": obj.target_profile.background_image.url
        }
        return context

    def get_author(self, obj):
        if obj.author_profile is not None:
            context = {
                'username': obj.author_profile.user.username,
                'profile_name': obj.author_profile.profile_name,
                'profile_image': obj.author_profile.profile_image.url,
                'background_image': obj.author_profile.background_image.url
            }
        else:
            context = None
        return context


class QuestionCreateSerializer(serializers.ModelSerializer):
    target_profile = serializers.CharField(required=True)
    content = serializers.CharField(max_length=100, required=True)

    def validate(self, data):
        if Profile.objects.filter(user__username=data['target_profile']).exists():
            return data
        raise DataInaccuracyError()

    class Meta:
        model = Question
        fields = ("target_profile", "content",)


class QuestionRefusedSerializer(serializers.ModelSerializer):
    question_id = serializers.IntegerField(required=True)

    class Meta:
        model = Question
        fields = ('question_id',)


# class TimelineSerializer(serializers.ModelSerializer):
#     answered_date = serializers.DateTimeField(source='answer.created_date')
#     profile = serializers.SerializerMethodField()
#     author = serializers.SerializerMethodField()
#     answer_content = serializers.CharField(source='answer.content')
#
#     class Meta:
#         model = Question
#         fields = ('pk', 'created_date', 'answered_date', 'profile', 'author', 'content', 'answer_content')
#
#     def get_profile(self, obj):
#         context = {
#             "username": obj.target_profile.user.username,
#             "profile_image": obj.target_profile.profile_image.url,
#             "background_image": obj.target_profile.background_image.url
#         }
#         return context
#
#     def get_author(self, obj):
#         if obj.author_profile is not None:
#             context = {
#                 "username": obj.author_profile.user.username,
#                 "profile_image": obj.author_profile.profile_image.url,
#                 "background_image": obj.author_profile.background_image.url
#             }
#         else:
#             context = None
#         return context
