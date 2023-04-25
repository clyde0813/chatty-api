from django.urls import path
from .views import RegisterView, ProfileGetAPIView, ProfileUpdateAPIView, \
    FollowUserView, EmailVerificationView, RankingView, LoginView, APNsDeviceView, CurrentUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('email/verify', EmailVerificationView.as_view()),
    path('login', LoginView.as_view()),
    # path('logout', LogoutView.as_view()),
    path('profile', ProfileUpdateAPIView.as_view()),
    path('profile/<str:username>', ProfileGetAPIView.as_view()),
    path('follow', FollowUserView.as_view()),
    path('ranking', RankingView.as_view()),

    path('FCM/ios', APNsDeviceView.as_view()),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    path('current', CurrentUserView.as_view(), name='current_user')
]
