from rest_framework import serializers

from user.serializers import ProfileSerializer
from .models import Question, Answer
from user.models import Profile, BlockedProfile

from Exceptions.BaseExceptions import *


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

    def to_representation(self, instance):
        # 질문이 익명일 경우 Pass
        if instance.anonymous_status is True:
            return super().to_representation(instance)

        # 로그인한 경우
        request = self.context.get("request")
        if request and hasattr(request, "user") and request.user.is_authenticated:
            user = request.user
        else:
            return super().to_representation(instance)

        # 차단한 사람, 차단 당한 사람 모두 필터링
        if BlockedProfile.objects.filter(profile=user.profile, blocked_profile=instance.author_profile).exists() or \
                BlockedProfile.objects.filter(profile=instance.author_profile, blocked_profile=user.profile).exists():
            return None
        return super().to_representation(instance)


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
