from django.urls import path
from .views import ChatRoomEnteranceAPIView, ChatAPIView

urlpatterns = [
    path('chatroom', ChatRoomEnteranceAPIView.as_view()),
    path('<int:chatroom_id>', ChatAPIView.as_view())
]
