from django.urls import path
from .views import RegisterView, LoginView, LogoutView, ProfileGetAPIView, ProfileUpdateAPIView, ProfileAdminView, \
    FollowUserView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('profile', ProfileUpdateAPIView.as_view()),
    path('profile/<str:username>', ProfileGetAPIView.as_view()),
    # path('profile/admin/<slug:username>', ProfileAdminView.as_view()),
    path('follow', FollowUserView.as_view())
]
