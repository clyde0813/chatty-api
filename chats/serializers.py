from rest_framework import serializers

from users.serializers import ProfileSerializer
from .models import Chat, ChatRoom
from users.models import Profile


class ChatRoomEnteranceSerializer(serializers.ModelSerializer):
    question_id = serializers.IntegerField(required=True)
    chatroom_password = serializers.CharField(max_length=30, required=False)

    class Meta:
        model = ChatRoom
        fields = ('question_id', 'chatroom_password')


class ChatSerializer(serializers.ModelSerializer):
    sender_profile = ProfileSerializer(read_only=True)

    class Meta:
        model = Chat
        fields = ('chatroom', 'sender_profile', 'sender_ip', 'content', 'created_date')
