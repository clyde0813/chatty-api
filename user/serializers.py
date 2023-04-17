import datetime
import re

from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

from rest_framework import serializers, exceptions
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from user.models import Profile, APNsDevice
from chatty.models import Question
from config.ip_address_gatherer import get_client_ip
from Exceptions.LoginExceptions import *
from Exceptions.RegisterExceptions import *


class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True, validators=[UniqueValidator(queryset=User.objects.all())],
                                     min_length=4, max_length=20)

    profile_name = serializers.CharField(source='profile.profile_name', required=True, min_length=1, max_length=20)

    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password], min_length=8,
                                     max_length=15)
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'profile_name', 'password', 'password2', 'email')

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError({'password': '비밀번호가 일치하지 않습니다.'})

        if User.objects.filter(username=data['username']).exists():
            raise UsernameAlreadyTakenError()

        if User.objects.filter(username=data['email']).exists():
            raise EmailAlreadyTakenError()

        return data

    def create(self, validated_data):
        user = User.objects.create_user(username=validated_data['username'], email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.last_login = datetime.datetime.now()
        user.save()
        Profile.objects.filter(user=user).update(profile_name=self.data['profile_name'],
                                                 recent_access_ip=get_client_ip(self.context['request']))
        return user


class EmailVerificationSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)


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
    follower = serializers.IntegerField(source='follower.count', required=False)
    following = serializers.IntegerField(source='following.count', required=False)

    class Meta:
        model = Profile
        fields = (
            'username', 'profile_name', 'user_id', 'response_rate', 'question_count', 'profile_image',
            'background_image',
            'profile_message', 'follower', 'following')

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


class ProfileUpdateSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=10, required=False)
    profile_name = serializers.CharField(max_length=50, required=False)
    profile_message = serializers.CharField(max_length=50, required=False)
    profile_image = serializers.ImageField(required=False)
    background_image = serializers.ImageField(required=False)

    class Meta:
        model = Profile
        fields = ('username', 'profile_name', 'profile_message', 'profile_image', 'background_image')


class FollowUserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=20, required=True)

    class Meta:
        model = Profile
        fields = ('username',)


class RankingSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', required=False)
    profile_image = serializers.ImageField(required=False)
    question_count = serializers.SerializerMethodField('get_question_count', read_only=True)

    class Meta:
        model = Profile
        fields = ('username', 'profile_image', 'question_count')

    def get_question_count(self, obj):
        return obj.question_target_profile.filter(delete_status=False, answer__isnull=False).count()


class APNsDeviceSerializer(serializers.ModelSerializer):
    token = serializers.CharField(max_length=200, required=True)

    class Meta:
        model = APNsDevice
        fields = ('token',)
