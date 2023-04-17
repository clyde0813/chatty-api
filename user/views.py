import datetime
import random
import re
import time
import logging

from django.contrib.auth.models import User
from django.db.models import Count
from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response

from drf_yasg.utils import swagger_auto_schema
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import Profile, APNsDevice
from .serializers import RegisterSerializer, ProfileSerializer, \
    ProfileUpdateSerializer, FollowUserSerializer, EmailVerificationSerializer, RankingSerializer, LoginSerializer, \
    APNsDeviceSerializer

from config.ip_address_gatherer import get_client_ip

from Exceptions.LoginExceptions import *
from Exceptions.FCMException import *
from Exceptions.RegisterExceptions import *
from Exceptions.BaseExceptions import *
from Exceptions.UnauthorizedExceptions import *

logger = logging.getLogger('chatty')


class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    @swagger_auto_schema(tags=['회원가입'])
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=False):
            validated_data = serializer.validated_data
            user = User.objects.create_user(username=validated_data['username'], email=validated_data['email'])
            user.set_password(validated_data['password'])
            user.last_login = datetime.datetime.now()
            user.save()
            Profile.objects.filter(user=user).update(profile_name=validated_data['profile_name'],
                                                     recent_access_ip=get_client_ip(request))
            token = TokenObtainPairSerializer.get_token(user)
            return Response(
                {'user': user.username, 'refresh_token': str(token), 'access_token': str(token.access_token)},
                status=status.HTTP_201_CREATED)
        else:
            raise DataInaccuracyError()


class EmailVerificationView(generics.GenericAPIView):
    serializer_class = EmailVerificationSerializer

    @swagger_auto_schema(tags=['이메일 인증'])
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            return Response({'info': '사용 가능한 이메일입니다.'}, status=status.HTTP_200_OK)
        else:
            raise DataInaccuracyError()


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    @swagger_auto_schema(tags=['로그인'])
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=False):
            validated_data = serializer.validated_data
            User.objects.filter(username=validated_data['user'].username).update(last_login=datetime.datetime.now())
            Profile.objects.filter(user=validated_data['user']).update(recent_access_ip=get_client_ip(request))
            logger.info('Login Success Username : ' + str(validated_data['user'].username) + ' IP : ' + str(
                get_client_ip(request)))
            return Response(
                {'username': validated_data['user'].username, 'refresh_token': validated_data['refresh_token'],
                 'access_token': validated_data['access_token']},
                status=status.HTTP_200_OK)
        else:
            raise LoginDataMismatchError()


class ProfileGetAPIView(generics.GenericAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    @swagger_auto_schema(tags=['프로필 조회'])
    def get(self, request, username):
        if Profile.objects.filter(user__username=username).exists():
            instance = self.queryset.filter(user__username=username).get()
            serializer = ProfileSerializer(instance)
            logger.info('Profile Get Success Username : ' + str(username) + ' IP : ' + str(get_client_ip(request)))
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            logger.error('Profile Get Failed Username : ' + str(username) + ' IP : ' + str(get_client_ip(request)))
            raise DataInaccuracyError()


class ProfileUpdateAPIView(generics.GenericAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileUpdateSerializer

    @swagger_auto_schema(tags=['프로필 업데이트'])
    def put(self, request):
        if request.user.is_authenticated:
            instance = self.queryset.filter(user=request.user)
            serializer = ProfileUpdateSerializer(request.data)
            if 'username' in serializer.data and serializer.data['username'] != '':
                if User.objects.filter(username=serializer.data['username']).exists():
                    raise UsernameAlreadyTakenError()
                else:
                    try:
                        User.objects.filter(username=request.user.username).update(username=serializer.data['username'])
                    except Exception as e:
                        logger.info('Profile Put Failed Username : ' + str(request.user.username) + ' IP : ' +
                                    str(get_client_ip(request)) + ' Error : ' + str(e))
                        return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)

            if 'profile_message' in serializer.data:
                instance.update(profile_message=serializer.data['profile_message'])

            if 'profile_image' in serializer.data:
                image_instance = instance.get()
                image_file = request.FILES['profile_image']
                image_file.name = str(request.user) + "-time" + str(time.time())
                image_instance.profile_image = image_file
                image_instance.save()

            if 'background_image' in serializer.data:
                image_instance = instance.get()
                image_file = request.FILES['background_image']
                image_file.name = str(request.user) + "-time" + str(time.time())
                image_instance.background_image = image_file
                image_instance.save()

            logger.info('Profile Put Success Username : ' + str(request.user.username) + ' IP : ' +
                        str(get_client_ip(request)))
            return Response({'info': '수정 완료'}, status=status.HTTP_200_OK)
        else:
            logger.error('Profile Put Failed - Unauthorized IP : ' + str(get_client_ip(request)))
            raise UnauthorizedError()


class FollowUserView(generics.GenericAPIView):
    queryset = Profile
    serializer_class = FollowUserSerializer

    @swagger_auto_schema(tages=['사용자 팔로우'])
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if request.user.is_authenticated:
            if serializer.is_valid():
                target = get_object_or_404(User, username=serializer.data['username'])
                request_user = Profile.objects.get(user=request.user)
                if request.user == target:
                    return Response({'info': '본인은 팔로우 불가합니다.'}, status=status.HTTP_200_OK)
                elif target.profile.follower.filter(username=request.user).exists():
                    target.profile.follower.remove(request.user)
                    request_user.following.remove(target)
                    logger.info('Follow Cancel Success Username : ' + str(request.user.username) + ' Target : ' +
                                str(serializer.data['username']) + ' IP : ' + str(get_client_ip(request)))
                    return Response({'info': '팔로우취소되었습니다.', 'username': serializer.data['username']},
                                    status=status.HTTP_200_OK)
                else:
                    target.profile.follower.add(request.user)
                    request_user.following.add(target)
                    logger.info('Follow Success Username : ' + str(request.user.username) + ' Target : ' +
                                str(serializer.data['username']) + ' IP : ' + str(get_client_ip(request)))
                    return Response({'info': '팔로우되었습니다.', 'username': serializer.data['username']},
                                    status=status.HTTP_200_OK)
            else:
                return Response({'error': 'key value 오류'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            logger.error('Follow Failed - Unauthorized IP : ' + str(get_client_ip(request)))
            return Response({'error': '로그인이 필요합니다.'}, status=status.HTTP_400_BAD_REQUEST)


class RankingView(generics.GenericAPIView):
    queryset = Profile
    serializer_class = RankingSerializer

    @swagger_auto_schema(tags=['랭킹'])
    def get(self, request):
        serializer = RankingSerializer(
            self.queryset.objects.filter(username__is_staff=False,
                                         question_target_profile__delete_status=False,
                                         question_target_profile__answer__isnull=False).all().annotate(
                question_count=Count('question_target_profile')).order_by('-question_count')[:10],
            many=True)
        return Response(serializer.data)


class APNsDeviceView(generics.GenericAPIView):
    queryset = APNsDevice
    serializer_class = APNsDeviceSerializer

    @swagger_auto_schema(tags=['APNs 기기 등록'])
    def post(self, request):
        if request.user.is_authenticated:
            query = APNsDevice.objects.filter(user=request.user, token=request.data["token"])
            if query.exists():
                query.update(created_date=datetime.datetime.now(), status=True)
                return Response({'info': 'APNs 정보 갱신 완료'}, status=status.HTTP_200_OK)
            else:
                APNsDevice.objects.create(user=request.user, token=request.data["token"], status=True)
                logger.info('APNs Device Registered : ' + str(request.user.username) + ' | token : ' + str(
                    request.data["token"] + ' | IP : ' + str(get_client_ip(request))))
                return Response({'info': 'APNs 등록 완료'}, status=status.HTTP_200_OK)
        else:
            logger.error('APNs Device Register Failed | IP : ' + str(get_client_ip(request)))
            raise APNsDeviceRegisterError()

    @swagger_auto_schema(tags=['FCM Token 비활성화'])
    def delete(self, request):
        if request.user.is_authenticated:
            query = APNsDevice.objects.filter(user=request.user, token=request.data["token"], status=True)
            if query.exists():
                query.update(status=False)
        return Response({'info': 'fcm 토큰 비활성화 완료'}, status=status.HTTP_200_OK)
