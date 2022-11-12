from django.urls import path
from .views import ChatRoomEntranceAPIView, ChatAPIView

urlpatterns = [
    path('chatroom', ChatRoomEntranceAPIView.as_view()),
    path('<int:chatroom_id>', ChatAPIView.as_view())
]
