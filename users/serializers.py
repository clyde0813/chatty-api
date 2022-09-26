import datetime

from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import serializers, status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.validators import UniqueValidator

from users.models import Profile, Report, BannedIp, TokenExpiration

from chatty_drf.ip_address_gatherer import get_client_ip


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email')

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError({"password": "비밀번호가 일치하지 않습니다."})
        return data

    def create(self, validated_data):
        user = User.objects.create_user(username=validated_data['username'], email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        token = Token.objects.create(user=user)
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
    username = serializers.CharField(source='username.username', read_only=True, required=False)
    user_id = serializers.IntegerField(source='username_id', read_only=True, required=False)
    follower = serializers.SerializerMethodField('get_follower_names', read_only=True, required=False)
    following = serializers.SerializerMethodField('get_following_names', read_only=True, required=False)

    class Meta:
        model = Profile
        fields = ('username', 'user_id', 'image', 'test', 'follower', 'following')

    def get_follower_names(self, obj):
        group_name_list = [i.username for i in obj.follower.all()]
        return group_name_list

    def get_following_names(self, obj):
        group_name_list = [i.username for i in obj.following.all()]
        return group_name_list


class ProfileAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('image', 'deactivated_status', 'ban_until', 'test', 'recent_access_ip')
