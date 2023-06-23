import datetime
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

from .models import Profile, Viewer, APNsDevice, Follow, BlockedProfile
from .serializers import RegisterSerializer, ProfileSerializer, \
    ProfileUpdateSerializer, EmailVerificationSerializer, RankingSerializer, LoginSerializer, \
    APNsDeviceSerializer, UsernameVerifySerializer

from config.ip_address_gatherer import get_client_ip

from Exceptions.LoginExceptions import *
from Exceptions.FCMException import *
from Exceptions.RegisterExceptions import *
from Exceptions.BaseExceptions import *
from Exceptions.UnauthorizedExceptions import *

from Permissions.UserAccessPermission import IsAuthenticated

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
            Follow.objects.filter(follower=request.user.profile).all().delete()
            Follow.objects.filter(following=request.user.profile).all().delete()
            num = str(datetime.datetime.now().microsecond)
            user_object = User.objects.get(username=request.user.username)
            APNsDevice.objects.filter(user=request.user).all().delete()
            profile_object = Profile.objects.get(user=request.user)
            email = "Del%s%s" % (num, user_object.email)
            username = "Del%s%s" % (num, user_object.username)
            profile_name = "Del%s%s" % (num, profile_object.profile_name)
            user_object.email = email
            user_object.username = username
            profile_object.profile_name = profile_name
            profile_object.is_active = False
            profile_object.deactivation_date = datetime.datetime.now()
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
    queryset = Profile.objects.filter(is_active=True)
    serializer_class = ProfileSerializer

    @swagger_auto_schema(tags=['프로필 조회'])
    def get(self, request, username):
        if Profile.objects.filter(user__username=username, is_active=True).exists():
            instance = self.queryset.filter(user__username=username).get()
            serializer = ProfileSerializer(instance, context={'request': request})
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
    queryset = Follow.objects.filter(follower__is_active=True, following__is_active=True)
    serializer_class = ProfileSerializer

    @swagger_auto_schema(tags=['팔로워 목록'])
    def get(self, request, username):
        instance = self.queryset.filter(following=Profile.objects.get(user__username=username)).all() \
            .select_related('follower').order_by('-created_date')
        instance = [follow.follower for follow in instance]
        paginator = FivePerPagePaginator()
        result_page = paginator.paginate_queryset(instance, request)
        serializer = ProfileSerializer(result_page, many=True, context={'request': request})
        return paginator.get_paginated_response(serializer.data)


class FollowingListView(generics.GenericAPIView):
    queryset = Follow.objects.filter(follower__is_active=True, following__is_active=True)
    serializer_class = ProfileSerializer

    @swagger_auto_schema(tags=['팔로워 목록'])
    def get(self, request, username):
        instance = self.queryset.filter(follower=Profile.objects.get(user__username=username)).all() \
            .select_related('following').order_by('-created_date')
        instance = [follow.following for follow in instance]
        paginator = FivePerPagePaginator()
        result_page = paginator.paginate_queryset(instance, request)
        serializer = ProfileSerializer(result_page, many=True, context={'request': request})
        return paginator.get_paginated_response(serializer.data)


class FollowUserView(generics.GenericAPIView):
    queryset = Profile
    serializer_class = UsernameVerifySerializer
    permission_classes = [IsAuthenticated]

    username_params = openapi.Schema(type=openapi.TYPE_OBJECT, properties={
        'username': openapi.Schema(type=openapi.TYPE_STRING, description="username"),
    })

    @swagger_auto_schema(tages=['팔로우'])
    def post(self, request):
        serializer = self.get_serializer(self, request.data)
        if serializer.is_valid():
            data = serializer.validated_data
        else:
            raise DataInaccuracyError()

        target_profile = Profile.objects.get(user__username=data['username'])
        if Follow.objects.filter(follower=request.user.profile, following=target_profile).exists():
            Follow.objects.filter(follower=request.user.profile, following=target_profile).delete()
            logger.info('Follow Cancel Success Username : ' + str(request.user.username) + ' Target : ' +
                        str(data['username']) + ' IP : ' + str(get_client_ip(request)))
            return Response({'info': '팔로우 취소 되었습니다.', 'username': data['username']},
                            status=status.HTTP_200_OK)
        else:
            Follow.objects.create(follower=request.user.profile, following=target_profile)
            logger.info('Follow Success Username : ' + str(request.user.username) + ' Target : ' +
                        str(data['username']) + ' IP : ' + str(get_client_ip(request)))
            return Response({'info': '팔로우 되었습니다.', 'username': data['username']},
                            status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=['팔로워 삭제'], request_body=username_params)
    def delete(self, request):
        serializer = self.get_serializer(self, request.data)
        if serializer.is_valid():
            data = serializer.validated_data
        else:
            raise DataInaccuracyError()

        follower_profile = User.objects.get(username=data['username']).profile
        if Follow.objects.filter(follower=follower_profile, following=request.user.profile).exists():
            Follow.objects.filter(follower=follower_profile, following=request.user.profile).all().delete()
            logger.info('Follower Delete Success Username : ' + str(request.user.username) + ' Target : ' +
                        str(data['username']) + ' IP : ' + str(get_client_ip(request)))
            return Response({'info': '팔로워가 삭제 되었습니다.', 'username': data['username']},
                            status=status.HTTP_200_OK)
        else:
            raise DataInaccuracyError()


class RankingView(generics.GenericAPIView):
    queryset = Profile.objects.filter(user__is_staff=False, is_active=True)
    serializer_class = RankingSerializer

    @swagger_auto_schema(tags=['랭킹'])
    def get(self, request):
        serializer = RankingSerializer(
            self.queryset.filter(question_target_profile__delete_status=False).all().annotate(
                question_count=Count('question_target_profile')).order_by('-question_count')[:50],
            many=True)
        return Response({"ranking": serializer.data}, status=status.HTTP_200_OK)


class APNsDeviceView(generics.GenericAPIView):
    queryset = APNsDevice
    serializer_class = APNsDeviceSerializer
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(tags=['APNs 기기 등록'])
    def post(self, request):
        query = APNsDevice.objects.filter(user=request.user, token=request.data["token"])
        if query.exists():
            return Response({'info': 'APNs 정보 갱신 완료'}, status=status.HTTP_200_OK)
        else:
            APNsDevice.objects.create(user=request.user, token=request.data["token"])
            logger.info('APNs Device Registered : ' + str(request.user.username) + ' | token : ' + str(
                request.data["token"] + ' | IP : ' + str(get_client_ip(request))))
            return Response({'info': 'APNs 등록 완료'}, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=['FCM Token 비활성화'])
    def delete(self, request):
        if self.queryset.objects.filter(token=request.data["token"]).exists():
            query = self.queryset.objects.filter(token=request.data["token"]).all()
            query.delete()
        return Response({'info': '기기 FCM 토큰 초기화 완료'}, status=status.HTTP_200_OK)


class UserSearchView(generics.GenericAPIView):
    queryset = Profile.objects.filter(is_active=True)
    serializer_class = ProfileSerializer
    keyword_param = openapi.Parameter('keyword', openapi.IN_QUERY, description="keyword", type=openapi.TYPE_STRING)

    @swagger_auto_schema(tags=['유저 검색'], manual_parameters=[keyword_param])
    def get(self, request):
        if request.query_params:
            paginator = FivePerPagePaginator()
            if request.query_params.get('keyword') == "":
                return Response({
                    "count": 0,
                    "next": None,
                    "previous": None,
                    "results": []
                }, status=status.HTTP_200_OK)

            instance = self.queryset.filter(
                Q(profile_name__icontains=request.query_params.get('keyword')) |
                Q(user__username__icontains=request.query_params.get('keyword'))
            ).order_by("-user__last_login")
            # 로그인 한 경우
            if request.user.is_authenticated:
                if instance.filter(user=request.user).exists():
                    instance = instance.exclude(user=request.user)

                # 차단한 유저 필터
                blocking_profiles = BlockedProfile.objects.filter(profile=request.user.profile).all().values_list(
                    'blocked_profile__profile_name')
                print("blocking_profiles : ", blocking_profiles)
                if instance.filter(profile_name__in=blocking_profiles).exists():
                    instance = instance.exclude(profile_name__in=blocking_profiles)

                # 차단 당한 유저 필터
                blocked_profiles = BlockedProfile.objects.filter(
                    blocked_profile=request.user.profile).all().values_list('profile__profile_name')
                print("blocked_profiles : ", blocked_profiles)
                if instance.filter(profile_name__in=blocked_profiles).exists():
                    instance = instance.exclude(profile_name__in=blocked_profiles)

            result_page = paginator.paginate_queryset(instance, request)
            serializer = ProfileSerializer(result_page, many=True, context={'request': request})
            return paginator.get_paginated_response(serializer.data)
        else:
            raise DataInaccuracyError


class UserBlockView(generics.GenericAPIView):
    queryset = BlockedProfile.objects.filter(blocked_profile__is_active=True, profile__is_active=True)
    serializer_class = UsernameVerifySerializer
    permission_classes = [IsAuthenticated]

    block_param = openapi.Schema(type=openapi.TYPE_OBJECT, description="username", properties={
        'username': openapi.Schema(type=openapi.TYPE_STRING, description='username')
    })

    @swagger_auto_schema(tags=['유저 차단 목록'])
    def get(self, request):
        instance = self.queryset.filter(profile=request.user.profile).all().select_related('blocked_profile')
        instance = [data.blocked_profile for data in instance]
        paginator = FivePerPagePaginator()
        result_page = paginator.paginate_queryset(instance, request)
        serializer = ProfileSerializer(result_page, many=True, context={'request': request})
        return paginator.get_paginated_response(serializer.data)

    @swagger_auto_schema(tags=['유저 차단'])
    def post(self, request):
        serializer = self.get_serializer(self, request.data)

        if serializer.is_valid():
            data = serializer.validated_data
        else:
            raise DataInaccuracyError()

        if request.user.username == data["username"]:
            raise DataInaccuracyError()

        if self.queryset.filter(profile=request.user.profile,
                                blocked_profile=Profile.objects.get(user__username=data["username"])).exists():
            raise DataInaccuracyError()

        blocking_profile = request.user.profile
        blocked_profile = Profile.objects.get(user__username=data["username"])

        BlockedProfile.objects.create(profile=blocking_profile, blocked_profile=blocked_profile)

        # If Blocking Profile follows blocked profile - delete follow object
        if Follow.objects.filter(follower=blocking_profile, following=blocked_profile).exists():
            Follow.objects.filter(follower=blocking_profile, following=blocked_profile).all().delete()

        # If Blocked Profile follows Blocking profile - delete follow object
        if Follow.objects.filter(following=blocking_profile, follower=blocked_profile).exists():
            Follow.objects.filter(following=blocking_profile, follower=blocked_profile).all().delete()

        logger.info(
            'User Block Success - Profile : ' + str(request.user) + 'Blocked User : ' + str(data['username']) \
            + ' IP : ' + str(get_client_ip(request)))
        return Response({'username': data["username"], 'info': '차단 완료'},
                        status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=['유저 차단 해제'], request_body=block_param)
    def delete(self, request):
        serializer = self.get_serializer(self, request.data)

        if serializer.is_valid():
            data = serializer.validated_data
        else:
            raise DataInaccuracyError()

        if request.user.username == data["username"]:
            raise DataInaccuracyError()

        if self.queryset.filter(profile=request.user.profile,
                                blocked_profile=Profile.objects.get(user__username=data["username"])).exists():
            self.queryset.get(profile=request.user.profile,
                              blocked_profile=Profile.objects.get(
                                  user__username=data["username"])).delete()
            logger.info('User Block Delete Success - Profile : ' + str(request.user) + 'Blocked User : ' + str(
                data['username']) + ' IP : ' + str(get_client_ip(request)))
            return Response({'username': data["username"], 'info': '차단 해제 완료'},
                            status=status.HTTP_200_OK)
        else:
            raise DataInaccuracyError()
