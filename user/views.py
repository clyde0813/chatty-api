import datetime
import random
import re
import time
import logging

from django.contrib.auth.models import User
from django.db.models import Count, Q
from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import Profile, Viewer, APNsDevice, Follow
from .serializers import RegisterSerializer, ProfileSerializer, \
    ProfileUpdateSerializer, FollowUserSerializer, EmailVerificationSerializer, RankingSerializer, LoginSerializer, \
    APNsDeviceSerializer

from config.ip_address_gatherer import get_client_ip

from Exceptions.LoginExceptions import *
from Exceptions.FCMException import *
from Exceptions.RegisterExceptions import *
from Exceptions.BaseExceptions import *
from Exceptions.UnauthorizedExceptions import *

from Pagination.CustomPagination import FivePerPagePaginator

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
                {'username': user.username, 'refresh_token': str(token), 'access_token': str(token.access_token)},
                status=status.HTTP_201_CREATED)
        else:
            raise DataInaccuracyError()

    @swagger_auto_schema(tags=["회원 탈퇴"])
    def delete(self, request):
        if request.user.is_authenticated:
            num = str(datetime.datetime.now().microsecond)
            user_object = User.objects.get(username=request.user.username)
            profile_object = Profile.objects.get(user=request.user)
            email = "Del%s%s" % (num, user_object.email)
            username = "Del%s%s" % (num, user_object.username)
            profile_name = "Del%s%s" % (num, profile_object.profile_name)
            user_object.email = email
            user_object.username = username
            profile_object.profile_name = profile_name
            user_object.save()
            profile_object.save()
            return Response({'info': '탈퇴 완료'}, status=status.HTTP_200_OK)
        else:
            raise UnauthorizedError()


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

            viewer = None
            if request.user.is_authenticated:
                viewer = request.user

            if instance.viewer.filter(user=viewer, access_ip=get_client_ip(request)).exists() and \
                    datetime.datetime.now() - instance.viewer.filter(user=viewer, access_ip=get_client_ip(
                request)).last().access_date \
                    <= datetime.timedelta(minutes=5):
                pass
            else:
                Viewer.objects.create(profile=instance, user=viewer, access_ip=get_client_ip(request))

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
                        logger.info('Profile Put Success Username : ' + str(
                            request.user.username) + ' Username : ' + serializer.data['username'] + ' IP : ' +
                                    str(get_client_ip(request)))
                    except Exception as e:
                        logger.info('Profile Put Failed Username : ' + str(request.user.username) + ' IP : ' +
                                    str(get_client_ip(request)) + ' Error : ' + str(e))
                        return DataInaccuracyError()

            if 'profile_name' in serializer.data and serializer.data['profile_name'] != '':
                instance.update(profile_name=serializer.data['profile_name'])
                logger.info('Profile Put Success Username : ' + str(
                    request.user.username) + ' PN : ' + serializer.data['profile_name'] + ' IP : ' +
                            str(get_client_ip(request)))

            if 'profile_message' in serializer.data and serializer.data['profile_message'] != '':
                instance.update(profile_message=serializer.data['profile_message'])
                logger.info('Profile Put Success Username : ' + str(
                    request.user.username) + ' PM : ' + serializer.data['profile_message'] + ' IP : ' +
                            str(get_client_ip(request)))

            if 'profile_image' in serializer.data:
                image_instance = instance.get()
                image_file = request.FILES['profile_image']
                image_file.name = str(request.user) + "-time" + str(time.time())
                image_instance.profile_image = image_file
                image_instance.save()
                logger.info('Profile Put Success Username : ' + str(
                    request.user.username) + ' PI : ' + image_file.name + ' IP : ' +
                            str(get_client_ip(request)))

            if 'background_image' in serializer.data:
                image_instance = instance.get()
                image_file = request.FILES['background_image']
                image_file.name = str(request.user) + "-time" + str(time.time())
                image_instance.background_image = image_file
                image_instance.save()
                logger.info('Profile Put Success Username : ' + str(
                    request.user.username) + ' BG : ' + image_file.name + ' IP : ' +
                            str(get_client_ip(request)))

            return Response({'info': '수정 완료'}, status=status.HTTP_200_OK)
        else:
            logger.error('Profile Put Failed - Unauthorized IP : ' + str(get_client_ip(request)))
            raise UnauthorizedError()


class FollowerListView(generics.GenericAPIView):
    @swagger_auto_schema(tags=['팔로워 목록'])
    def get(self, request, username):
        instance = Profile.objects.filter(follower__following__user__username=username).order_by(
            '-follower__created_date')
        paginator = FivePerPagePaginator()
        result_page = paginator.paginate_queryset(instance, request)
        serializer = ProfileSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)


class FollowingListView(generics.GenericAPIView):
    @swagger_auto_schema(tags=['팔로워 목록'])
    def get(self, request, username):
        instance = Profile.objects.filter(following__follower__user__username=username).order_by(
            '-following__created_date')
        paginator = FivePerPagePaginator()
        result_page = paginator.paginate_queryset(instance, request)
        serializer = ProfileSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)


class FollowUserView(generics.GenericAPIView):
    queryset = Profile
    serializer_class = FollowUserSerializer

    @swagger_auto_schema(tages=['사용자 팔로우'])
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if request.user.is_authenticated:
            if serializer.is_valid():
                target_user = get_object_or_404(User, username=serializer.data['username'])
                if request.user == target_user:
                    return DataInaccuracyError()
                elif Follow.objects.filter(follower=request.user.profile, following=target_user.profile).exists():
                    Follow.objects.filter(follower=request.user.profile, following=target_user.profile).delete()
                    logger.info('Follow Cancel Success Username : ' + str(request.user.username) + ' Target : ' +
                                str(serializer.data['username']) + ' IP : ' + str(get_client_ip(request)))
                    return Response({'info': '팔로우취소되었습니다.', 'username': serializer.data['username']},
                                    status=status.HTTP_200_OK)
                else:
                    Follow.objects.create(follower=request.user.profile, following=target_user.profile)
                    logger.info('Follow Success Username : ' + str(request.user.username) + ' Target : ' +
                                str(serializer.data['username']) + ' IP : ' + str(get_client_ip(request)))
                    return Response({'info': '팔로우되었습니다.', 'username': serializer.data['username']},
                                    status=status.HTTP_200_OK)
            else:
                return DataInaccuracyError()
        else:
            logger.error('Follow Failed - Unauthorized IP : ' + str(get_client_ip(request)))
            return UnauthorizedError()


class RankingView(generics.GenericAPIView):
    queryset = Profile
    serializer_class = RankingSerializer

    @swagger_auto_schema(tags=['랭킹'])
    def get(self, request):
        serializer = RankingSerializer(
            self.queryset.objects.filter(user__is_staff=False,
                                         question_target_profile__delete_status=False).all().annotate(
                question_count=Count('question_target_profile')).order_by('-question_count')[:50],
            many=True)
        return Response({"ranking": serializer.data}, status=status.HTTP_200_OK)


class APNsDeviceView(generics.GenericAPIView):
    queryset = APNsDevice
    serializer_class = APNsDeviceSerializer

    @swagger_auto_schema(tags=['APNs 기기 등록'])
    def post(self, request):
        if request.user.is_authenticated:
            query = APNsDevice.objects.filter(user=request.user, token=request.data["token"])
            if query.exists():
                return Response({'info': 'APNs 정보 갱신 완료'}, status=status.HTTP_200_OK)
            else:
                APNsDevice.objects.create(user=request.user, token=request.data["token"])
                logger.info('APNs Device Registered : ' + str(request.user.username) + ' | token : ' + str(
                    request.data["token"] + ' | IP : ' + str(get_client_ip(request))))
                return Response({'info': 'APNs 등록 완료'}, status=status.HTTP_200_OK)
        else:
            logger.error('APNs Device Register Failed | IP : ' + str(get_client_ip(request)))
            raise APNsDeviceRegisterError()

    @swagger_auto_schema(tags=['FCM Token 비활성화'])
    def delete(self, request):
        if self.queryset.objects.filter(token=request.data["token"]).exists():
            query = self.queryset.objects.filter(token=request.data["token"]).all()
            query.delete()
        return Response({'info': '기기 FCM 토큰 초기화 완료'}, status=status.HTTP_200_OK)


class SearchUserView(generics.GenericAPIView):
    queryset = Profile
    keyword_param = openapi.Parameter('keyword', openapi.IN_QUERY, description="keyword", type=openapi.TYPE_STRING)

    @swagger_auto_schema(tags=['유저 검색'], manual_parameters=[keyword_param])
    def get(self, request):
        if request.query_params:
            instance = self.queryset.objects.filter(
                Q(profile_name__icontains=request.query_params.get('keyword')) |
                Q(user__username__icontains=request.query_params.get('keyword'))
            )
            paginator = FivePerPagePaginator()
            result_page = paginator.paginate_queryset(instance, request)
            serializer = ProfileSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        else:
            raise DataInaccuracyError
