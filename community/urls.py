from django.urls import path
from .views import BoardListAPIView, BoardPostAPIView

urlpatterns = [
    path('', BoardListAPIView.as_view()),
    path('<int:board_id>', BoardPostAPIView.as_view())
]
