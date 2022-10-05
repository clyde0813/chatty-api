from django.shortcuts import render
from drf_yasg.utils import swagger_auto_schema
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .serializers import ChatRoomEnteranceSerializer, ChatSerializer
from .models import ChatRoom, Chat


# Create your views here.
class ChatRoomEnteranceAPIView(GenericAPIView):
    serializer_class = ChatRoomEnteranceSerializer
    queryset = ChatRoom.objects.all()

    @swagger_auto_schema(tags=['채팅방 입장'])
    def post(self, request):
        if self.queryset.filter(question_id=request.data['question_id']).exists():
            chatroom_instance = self.queryset.filter(
                question_id=request.data['question_id']).get()
            if request.user == chatroom_instance.question.target_profile.username:
                return Response({'info': '입장', 'chatroom_id': chatroom_instance.pk})
            elif 'chatroom_password' in request.data and request.data[
                'chatroom_password'] == chatroom_instance.question.chatroom_password:
                return Response({'chatroom_key': chatroom_instance.key, 'chatroom_id': chatroom_instance.pk})
            else:
                return Response({'error': '권한없음'})
        else:
            return Response({'error': '채팅방 없음'})


class ChatAPIView(GenericAPIView):
    serializer_class = ChatSerializer
    queryset = ChatRoom.objects.all()

    @swagger_auto_schema(tags=['채팅 로그'])
    def get(self, request, chatroom_id):
        if self.queryset.filter(pk=chatroom_id).exists():
            chatroom_instance = self.queryset.filter(pk=chatroom_id).order_by('-created_date')
            if request.user == chatroom_instance.get().question.target_profile.username or 'chatroom-key' in request.headers and \
                    request.headers[
                        'chatroom-key'] == chatroom_instance.get().key:
                serializer = ChatSerializer(Chat.objects.filter(chatroom_id=chatroom_id).all(),
                                            many=True)
                return Response(serializer.data)
            else:
                return Response({'error': '권한 없음'})

        else:
            return Response({'error': '채팅방 없음'})
