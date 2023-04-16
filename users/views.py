import datetime
import random
import re
import time
import logging

from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db.models import Count
from django.shortcuts import get_object_or_404
from django.core import mail
from django.core.cache import cache
from rest_framework import generics, status
from rest_framework.response import Response

from drf_yasg.utils import swagger_auto_schema
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import Profile, ForbiddenUsername, APNsDevice
from .serializers import RegisterSerializer, ProfileSerializer, \
    ProfileUpdateSerializer, FollowUserSerializer, EmailVerificationSerializer, RankingSerializer, LoginSerializer, \
    APNsDeviceSerializer

import threading
from config.ip_address_gatherer import get_client_ip

from Exceptions.LoginExceptions import *
from Exceptions.FCMException import *

logger = logging.getLogger('chatty')


def send_mail(subject, message, recipient_list, from_email):
    mail.send_mail(subject=subject, message=message, recipient_list=recipient_list, from_email=from_email,
                   fail_silently=False)


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


class EmailVerificationView(generics.GenericAPIView):
    serializer_class = EmailVerificationSerializer

    @swagger_auto_schema(tags=['이메일 인증'])
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            if User.objects.filter(email=serializer.data['email']).exists():
                return Response({'error': '이미 사용중인 이메일입니다.'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                # 이메일 인증 임시 비활성화 - SMTP 이슈
                # random_num = random.randint(100000, 999999)
                # mail_threading = threading.Thread(target=send_mail,
                #                                   args=['Chatty Email Verification',
                #                                         'Verification Code : ' + str(random_num),
                #                                         [serializer.data['email']], 'no.reply.chatty.kr@gmail.com'])
                # mail_threading.setDaemon(True)
                # mail_threading.start()
                # cache.set(serializer.data['email'], random_num)
                # logger.info('Email Verification Code Sent Email : ' + str(serializer.data['email']) + ' IP : ' +
                #             str(get_client_ip(request)))
                return Response({'info': '사용 가능한 이메일입니다.'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': '입력값이 정확하지 않습니다.'}, status=status.HTTP_400_BAD_REQUEST)


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
            return Response({'error': '존재하지 않는 유저입니다.'}, status=status.HTTP_400_BAD_REQUEST)


class ProfileUpdateAPIView(generics.GenericAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileUpdateSerializer

    @swagger_auto_schema(tags=['프로필 업데이트'])
    def put(self, request):
        if request.user.is_authenticated:
            instance = self.queryset.filter(user=request.user)
            restricted_username_list = ForbiddenUsername.objects.values_list()
            serializer = ProfileUpdateSerializer(request.data)
            if 'username' in serializer.data and serializer.data['username'] != '':
                for i in restricted_username_list:
                    if i[1] in serializer.data['username'].lower():
                        return Response({'error': '사용불가 아이디입니다.'}, status=status.HTTP_400_BAD_REQUEST)

                if User.objects.filter(username=serializer.data['username']).exists():
                    return Response({'error': '이미 사용중인 아이디입니다.'}, status=status.HTTP_400_BAD_REQUEST)

                if re.match('^[a-z|A-Z|0-9|_.]{4,20}$', serializer.data['username']) is None:
                    return Response({'error': '아이디는 영어 + 숫자 조합만 가능합니다.'}, status=status.HTTP_400_BAD_REQUEST)
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
            return Response({'error': '로그인이 필요합니다.'}, status=status.HTTP_400_BAD_REQUEST)


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
