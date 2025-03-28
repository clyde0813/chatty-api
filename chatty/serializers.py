from rest_framework import serializers

from user.serializers import ProfileSerializer
from .models import Question, Answer, QuestionLike
from user.models import Profile, BlockedProfile

from Exceptions.BaseExceptions import *


class QuestionSerializer(serializers.ModelSerializer):
    answered_date = serializers.DateTimeField(source='answer.created_date')
    answer_content = serializers.CharField(read_only=True, source='answer.content')
    author = serializers.SerializerMethodField()
    profile = serializers.SerializerMethodField()
    like = serializers.IntegerField(source='question_like.count')
    like_status = serializers.SerializerMethodField()

    class Meta:
        model = Question
        fields = (
            'pk', 'created_date', 'answered_date', 'profile', 'author', 'content', 'answer_content', 'refusal_status',
            'like', 'like_status',)

    def get_profile(self, obj):
        context = {
            "username": obj.target_profile.user.username,
            'profile_name': obj.target_profile.profile_name,
            "profile_image": obj.target_profile.profile_image.url,
            "background_image": obj.target_profile.background_image.url
        }
        return context

    def get_author(self, obj):
        if obj.author_profile is not None and obj.anonymous_status is not True:
            context = {
                'username': obj.author_profile.user.username,
                'profile_name': obj.author_profile.profile_name,
                'profile_image': obj.author_profile.profile_image.url,
                'background_image': obj.author_profile.background_image.url
            }
        else:
            context = None
        return context

    def get_like_status(self, obj):
        user = None
        request = self.context.get("request")

        if request and hasattr(request, "user"):
            user = request.user

        if user is not None and user.is_authenticated and user.profile != obj:
            if QuestionLike.objects.filter(question=obj, author=user.profile).exists():
                return True
            else:
                return False
        else:
            return False


class QuestionCreateSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    content = serializers.CharField(max_length=100, required=True)
    anonymous_status = serializers.BooleanField(default=True)

    def validate(self, data):
        if Profile.objects.filter(user__username=data['username']).exists():
            return data
        raise DataInaccuracyError()

    class Meta:
        fields = ("username", "content", "anonymous_status",)
