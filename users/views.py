from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.utils.decorators import method_decorator
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.authtoken.models import Token

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from .models import Profile, Report
from .serializers import RegisterSerializer, LoginSerializer, LogoutSerializer, ProfileSerializer, \
    ProfileAdminSerializer
from .permissions import CustomReadOnly



class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    @swagger_auto_schema(tags=['로그인'])
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data
        return Response({'token': token.key}, status=status.HTTP_200_OK)


class LogoutView(generics.GenericAPIView):
    serializer_class = LogoutSerializer

    @swagger_auto_schema(tags=['로그아웃'])
    def get(self, request):
        serializer = self.get_serializer(data=request.META)
        serializer.is_valid(raise_exception=True)
        return Response({'info': '로그아웃되었습니다.'}, status=status.HTTP_200_OK)


class ProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = [CustomReadOnly]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    lookup_field = 'username__username'
    lookup_url_kwarg = 'username'


class ProfileAdminView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAdminUser]
    queryset = Profile.objects.all()
    serializer_class = ProfileAdminSerializer
    lookup_field = 'username__username'
    lookup_url_kwarg = 'username'


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def follow_user(request, username):
    target = get_object_or_404(User, username=username)
    request_user = Profile.objects.get(username=request.user)
    if request.user == target:
        return Response({'info': '본인은 팔로우 불가합니다.'}, status=status.HTTP_200_OK)
    elif target.profile.follower.filter(username=request.user).exists():
        target.profile.follower.remove(request.user)
        request_user.following.remove(target)
        return Response({'info': '팔로우취소되었습니다.'}, status=status.HTTP_200_OK)
    else:
        target.profile.follower.add(request.user)
        request_user.following.add(target)
        return Response({'info': '팔로우되었습니다.'}, status=status.HTTP_200_OK)
