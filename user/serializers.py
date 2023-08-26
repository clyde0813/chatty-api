import datetime
import re

from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.core.validators import validate_email

from rest_framework import serializers, exceptions
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from user.models import Profile, APNsDevice, BlockedProfile
from chatty.models import Question
from config.ip_address_gatherer import get_client_ip
from Exceptions.LoginExceptions import *
from Exceptions.RegisterExceptions import *
from Exceptions.BaseExceptions import DataInaccuracyError

from .models import Follow


class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(required=True, min_length=4, max_length=20)
    profile_name = serializers.CharField(required=True, min_length=1, max_length=20)
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, min_length=4, max_length=20)
    password2 = serializers.CharField(required=True, min_length=4, max_length=20)

    def validate(self, data):
        if len(data['password']) < 4 or 20 < len(data['password']):
            raise PasswordLengthError()

        if data['password'] != data['password2']:
            raise PasswordInconsistencyError()

        if User.objects.filter(username=data['username']).exists():
            raise UsernameAlreadyTakenError()

        if User.objects.filter(email=data['email']).exists():
            raise EmailAlreadyTakenError()

        return data


class EmailVerificationSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)

    def validate(self, data):
        if User.objects.filter(email=data['email']).exists():
            raise EmailAlreadyTakenError()
        if validate_email(data['email']):
            raise EmailAlreadyTakenError()
        return data


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

    def validate(self, data):
        user = authenticate(**data)
        if user:
            token = TokenObtainPairSerializer.get_token(user)
            return {'user': user, 'refresh_token': str(token), 'access_token': str(token.access_token)}
        raise LoginDataMismatchError()


class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', required=False)
    response_rate = serializers.SerializerMethodField('get_response_rate', read_only=True)
    question_count = serializers.SerializerMethodField('get_question_count', read_only=True)
    profile_image = serializers.ImageField(required=False)
    background_image = serializers.ImageField(required=False)
    follower = serializers.IntegerField(source='following.count', required=False)
    following = serializers.IntegerField(source='follower.count', required=False)
    views = serializers.IntegerField(source='viewer.count', required=False)
    follow_status = serializers.SerializerMethodField()
    ranking_status = serializers.BooleanField()
    block_state = serializers.SerializerMethodField(source='get_block_state')

    class Meta:
        model = Profile
        fields = (
            'username', 'profile_name', 'user_id', 'response_rate', 'question_count', 'profile_image',
            'background_image', 'profile_message', 'link', 'follower', 'following', 'views', 'follow_status',
            'ranking_status', 'block_state',)

    def get_response_rate(self, obj):
        if Question.objects.filter(
                target_profile__user=obj.user, answer__isnull=False, delete_status=False).exists():
            return round(Question.objects.filter(target_profile__user=obj.user,
                                                 answer__isnull=False,
                                                 delete_status=False).count() / Question.objects.filter(
                target_profile__user=obj.user, delete_status=False).count() * 100)
        else:
            return 0

    def get_question_count(self, obj):
        context = {'answered': Question.objects.filter(target_profile__user=obj.user, answer__isnull=False,
                                                       refusal_status=False, delete_status=False).count(),
                   'unanswered': Question.objects.filter(target_profile__user=obj.user, answer__isnull=True,
                                                         refusal_status=False, delete_status=False).count(),
                   'rejected': Question.objects.filter(target_profile__user=obj.user, answer__isnull=True,
                                                       refusal_status=True, delete_status=False).count()}
        return context

    def get_follow_status(self, obj):
        user = None
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
        if user is not None and user.is_authenticated and user.profile != obj:
            if Follow.objects.filter(follower=user.profile, following=obj).exists():
                return True
            else:
                return False
        else:
            return False

    def get_block_state(self, obj):
        user = None
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
        if user is not None and user.is_authenticated and user.profile != obj:
            if BlockedProfile.objects.filter(profile=user.profile, blocked_profile=obj).exists():
                return True
            else:
                return False
        else:
            return False


class ProfileUpdateSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=10, required=False)
    profile_name = serializers.CharField(max_length=50, required=False)
    profile_message = serializers.CharField(max_length=50, required=False)
    link = serializers.URLField(max_length=300, required=False)
    profile_image = serializers.ImageField(required=False)
    background_image = serializers.ImageField(required=False)

    class Meta:
        model = Profile
        fields = ('username', 'profile_name', 'profile_message', 'link', 'profile_image', 'background_image')


class RankingSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', required=False)
    profile_image = serializers.ImageField(required=False)
    question_count = serializers.SerializerMethodField('get_question_count', read_only=True)

    class Meta:
        model = Profile
        fields = ('username', 'profile_name', 'profile_image', 'question_count')

    def get_question_count(self, obj):
        return obj.question_target_profile.filter(delete_status=False).count()


class APNsDeviceSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=200, required=True)


class UsernameVerifySerializer(serializers.Serializer):
    username = serializers.CharField(required=True)

    def validate(self, data):
        if Profile.objects.filter(user__username=data['username']).exists():
            return data
        raise DataInaccuracyError()

    class Meta:
        fields = ('username',)
