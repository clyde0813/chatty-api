import datetime
import re

from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import serializers, status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.validators import UniqueValidator

from users.models import Profile, Report, BannedIp, TokenExpiration, ForbiddenUsername
from posts.models import Question, Answer
from chatty_drf.ip_address_gatherer import get_client_ip
from drf_yasg.utils import swagger_auto_schema


class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True, validators=[UniqueValidator(queryset=User.objects.all())],
                                     min_length=5, max_length=15)
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password], min_length=8,
                                     max_length=20)
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email')

    def validate(self, data):
        if re.match('[a-z|A-Z|0-9]+$', data['username']) is None:
            raise serializers.ValidationError({'error': '아이디는 영어 + 숫자 조합만 가능합니다.'})

        if re.match('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$', data['password']) is None:
            raise serializers.ValidationError({'error': '비밀번호는 8자 이상 영어, 숫자, 기호 포함'})

        if data['password'] != data['password2']:
            raise serializers.ValidationError({'password': '비밀번호가 일치하지 않습니다.'})

        restricted_username_list = ForbiddenUsername.objects.values_list()
        for i in restricted_username_list:
            if i[1] in data['username'].lower():
                raise serializers.ValidationError({'error': '사용불가 아이디입니다.'})

        if User.objects.filter(username=data['username']).exists():
            raise serializers.ValidationError({'error': '이미 사용중인 아이디입니다.'})

        return data

    def create(self, validated_data):
        user = User.objects.create_user(username=validated_data['username'], email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        Token.objects.create(user=user)
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user:
            try:
                token = Token.objects.get(user=user)
                print(token.tokenexpiration.expiration_date.replace(
                    tzinfo=None) - datetime.datetime.utcnow().replace(tzinfo=None))

                if token.tokenexpiration.expiration_date.replace(
                        tzinfo=None) - datetime.datetime.utcnow().replace(tzinfo=None) < datetime.timedelta(seconds=1):
                    token.delete()
                    token = Token.objects.create(user=user)
                return token
            except ObjectDoesNotExist:
                token = Token.objects.create(user=user)
                return token

        raise serializers.ValidationError({"error": "로그인 정보가 정확하지 않습니다."})


class LogoutSerializer(serializers.Serializer):
    HTTP_AUTHORIZATION = serializers.CharField(required=True)

    def validate(self, data):
        data = data['HTTP_AUTHORIZATION'].replace('Token ', '')
        if Token.objects.filter(key=data).exists():
            Token.objects.filter(key=data).delete()
        return True


class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='username.username', required=False)
    user_id = serializers.IntegerField(source='username_id', read_only=True, required=False)
    response_rate = serializers.SerializerMethodField('get_response_rate', read_only=True)
    question_count = serializers.SerializerMethodField('get_question_count', read_only=True)
    profile_image = serializers.ImageField(required=False)
    follower = serializers.SerializerMethodField('get_follower_names', read_only=True, required=False)
    following = serializers.SerializerMethodField('get_following_names', read_only=True, required=False)

    class Meta:
        model = Profile
        fields = (
            'username', 'user_id', 'response_rate', 'question_count', 'profile_image', 'profile_message', 'follower',
            'following')

    def get_follower_names(self, obj):
        group_name_list = [i.username for i in obj.follower.all()]
        return group_name_list

    def get_following_names(self, obj):
        group_name_list = [i.username for i in obj.following.all()]
        return group_name_list

    def get_response_rate(self, obj):
        if Question.objects.filter(
                target_profile__username=obj.username).exists():
            return round(Question.objects.filter(target_profile__username=obj.username,
                                                 answer__isnull=False,
                                                 delete_status=False).count() / Question.objects.filter(
                target_profile__username=obj.username, delete_status=False).count() * 100)
        else:
            return 0

    def get_question_count(self, obj):
        context = {'answered': Question.objects.filter(target_profile__username=obj.username, answer__isnull=False,
                                                       refusal_status=False, delete_status=False).count(),
                   'unanswered': Question.objects.filter(target_profile__username=obj.username, answer__isnull=True,
                                                         refusal_status=False, delete_status=False).count(),
                   'rejected': Question.objects.filter(target_profile__username=obj.username, answer__isnull=True,
                                                       refusal_status=True, delete_status=False).count()}
        return context


class ProfileUpdateSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=10, required=False)
    profile_message = serializers.CharField(max_length=50, required=False)
    profile_image = serializers.ImageField(required=False)

    class Meta:
        model = Profile
        fields = ('username', 'profile_message', 'profile_image')


class FollowUserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=20, required=True)

    class Meta:
        model = Profile
        fields = ('username',)
