import datetime
import random
import time
import logging
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.core import mail
from django.core.cache import cache
from rest_framework import generics, status
from rest_framework.response import Response

from drf_yasg.utils import swagger_auto_schema

from .models import Profile, ForbiddenUsername
from .serializers import RegisterSerializer, LoginSerializer, LogoutSerializer, ProfileSerializer, \
    ProfileUpdateSerializer, FollowUserSerializer, EmailVerificationSerializer

import threading
from config.ip_address_gatherer import get_client_ip

logger = logging.getLogger('chatty')


def send_mail(subject, message, recipient_list, from_email, fail_silently):
    mail.send_mail(subject=subject, message=message, recipient_list=recipient_list, from_email=from_email,
                   fail_silently=fail_silently)


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
                random_num = random.randint(100000, 999999)
                mail_threading = threading.Thread(target=send_mail,
                                                  args=['Chatty Email Verification',
                                                        'Verification Code : ' + str(random_num),
                                                        [serializer.data['email']], 'no.reply.chatty.kr@gmail.com',
                                                        False])
                mail_threading.setDaemon(True)
                mail_threading.start()
                cache.set(serializer.data['email'], random_num)
                logger.info('Email Verification Code Sent Email : ', serializer.data['email'], ' IP : ',
                            get_client_ip(request))
                return Response({'info': '인증 메일 전송 완료'}, status=status.HTTP_200_OK)
        else:
            logger.error('Email Verification Code Sent Failed Email : ', serializer.data['email'], ' IP : ',
                         get_client_ip(request))
            return Response({'error': '입력값이 정확하지 않습니다.'}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    @swagger_auto_schema(tags=['로그인'])
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data
        User.objects.filter(username=token.user.username).update(last_login=datetime.datetime.now())
        Profile.objects.filter(username=token.user).update(recent_access_ip=get_client_ip(request))
        mail_threading = threading.Thread(target=send_mail,
                                          args=['Login Alert', str(token.user.username) + ' Login Alert',
                                                [str(token.user.email)], 'no.reply.chatty.kr@gmail.com', False])
        mail_threading.setDaemon(True)
        mail_threading.start()
        logger.info('Login Success Username : ', token.user.username, ' IP : ',
                    get_client_ip(request))
        return Response({'username': token.user.username, 'token': token.key}, status=status.HTTP_200_OK)


class LogoutView(generics.GenericAPIView):
    serializer_class = LogoutSerializer

    @swagger_auto_schema(tags=['로그아웃'])
    def get(self, request):
        serializer = self.get_serializer(data=request.META)
        serializer.is_valid(raise_exception=True)
        logger.info('Logout Success Username : ', request.user, ' IP : ',
                    get_client_ip(request))
        return Response({'info': '로그아웃되었습니다.'}, status=status.HTTP_200_OK)


class ProfileGetAPIView(generics.GenericAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    @swagger_auto_schema(tags=['프로필 조회'])
    def get(self, request, username):
        if Profile.objects.filter(username__username=username).exists():
            instance = self.queryset.filter(username__username=username).get()
            serializer = ProfileSerializer(instance)
            logger.info('Profile Get Success Username : ', username, ' IP : ',
                        get_client_ip(request))
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            logger.error('Profile Get Failed Username : ', username, ' IP : ',
                         get_client_ip(request))
            return Response({'error': '존재하지 않는 유저입니다.'}, status=status.HTTP_400_BAD_REQUEST)


class ProfileUpdateAPIView(generics.GenericAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileUpdateSerializer

    @swagger_auto_schema(tags=['프로필 업데이트'])
    def put(self, request):
        if request.user.is_authenticated:
            instance = self.queryset.filter(username=request.user)
            restricted_username_list = ForbiddenUsername.objects.values_list()
            serializer = ProfileUpdateSerializer(request.data)
            if 'username' in serializer.data and serializer.data['username'] != '':
                for i in restricted_username_list:
                    if i[1] in serializer.data['username'].lower():
                        return Response({'error': '사용불가 아이디입니다.'}, status=status.HTTP_400_BAD_REQUEST)
                if User.objects.filter(username=serializer.data['username']).exists():
                    return Response({'error': '이미 사용중인 아이디입니다.'}, status=status.HTTP_400_BAD_REQUEST)
                else:
                    try:
                        User.objects.filter(username=request.user.username).update(username=serializer.data['username'])
                    except Exception as e:
                        logger.info('Profile Put Failed Username : ', request.user, ' IP : ',
                                    get_client_ip(request), ' Error : ', e)
                        return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
            if 'profile_message' in serializer.data:
                instance.update(profile_message=serializer.data['profile_message'])
            if 'profile_image' in serializer.data:
                image_instance = instance.get()
                image_file = request.FILES['profile_image']
                image_file.name = str(request.user) + str(time.time())
                image_instance.profile_image = image_file
                image_instance.save()
            logger.info('Profile Put Success Username : ', request.user, ' IP : ',
                        get_client_ip(request))
            return Response({'info': '수정 완료'}, status=status.HTTP_200_OK)
        else:
            logger.error('Profile Put Failed - Unauthorized Username : ', request.user, ' IP : ',
                         get_client_ip(request))
            return Response({'error': '로그인이 필요합니다.'}, status=status.HTTP_400_BAD_REQUEST)


class FollowUserView(generics.GenericAPIView):
    queryset = Profile
    serializer_class = FollowUserSerializer

    @swagger_auto_schema(tages=['사용자 팔로우'])
    def post(self, request):
        serializer = FollowUserSerializer(data=request.data)
        if request.user.is_authenticated:
            if serializer.is_valid():
                target = get_object_or_404(User, username=serializer.data['username'])
                request_user = Profile.objects.get(username=request.user)
                if request.user == target:
                    return Response({'info': '본인은 팔로우 불가합니다.'}, status=status.HTTP_200_OK)
                elif target.profile_username.follower.filter(username=request.user).exists():
                    target.profile_username.follower.remove(request.user)
                    request_user.following.remove(target)
                    logger.info('Follow Cancelled Success Username : ', request.user, ' Target : ',
                                serializer.data['username'], ' IP : ',
                                get_client_ip(request))
                    return Response({'info': '팔로우취소되었습니다.', 'username': serializer.data['username']},
                                    status=status.HTTP_200_OK)
                else:
                    target.profile_username.follower.add(request.user)
                    request_user.following.add(target)
                    logger.info('Follow Cancelled Success Username : ', request.user, ' Target : ',
                                serializer.data['username'], ' IP : ',
                                get_client_ip(request))
                    return Response({'info': '팔로우되었습니다.', 'username': serializer.data['username']},
                                    status=status.HTTP_200_OK)
            else:
                return Response({'error': 'key value 오류'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            logger.error('Follow Failed - Unauthorized Username : ', request.user, ' IP : ',
                         get_client_ip(request))
            return Response({'error': '로그인이 필요합니다.'}, status=status.HTTP_400_BAD_REQUEST)
