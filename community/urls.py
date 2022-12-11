from django.urls import path
from .views import BoardAPIView, PostListAPIView, PostAPIView

urlpatterns = [
    path('', BoardAPIView.as_view()),
    path('<int:board_id>', PostListAPIView.as_view()),
    path('<int:board_id>/<int:post_id>', PostAPIView.as_view())
]
