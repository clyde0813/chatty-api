from rest_framework import serializers

from users.serializers import ProfileSerializer
from .models import Chat, ChatRoom
from users.models import Profile


class ChatRoomSerializer(serializers.ModelSerializer):
    nickname = serializers.SerializerMethodField('nickname_picker')
    last_message = serializers.SerializerMethodField('last_message_picker')

    class Meta:
        model = ChatRoom
        fields = ('pk', 'question_id', 'created_date', 'nickname', 'last_message')

    def nickname_picker(self, obj):
        return obj.question.nickname

    def last_message_picker(self, obj):
        if obj.chats.last():
            return obj.chats.last().content
        else:
            return None


class ChatRoomEnteranceSerializer(serializers.ModelSerializer):
    question_id = serializers.IntegerField(required=True)
    chatroom_password = serializers.CharField(max_length=30, required=False)

    class Meta:
        model = ChatRoom
        fields = ('question_id', 'chatroom_password')


class ChatSerializer(serializers.ModelSerializer):
    sender_profile = ProfileSerializer(read_only=True)
    sender_nickname = serializers.SerializerMethodField('get_sender_nickname', required=False, read_only=True)

    class Meta:
        model = Chat
        fields = ('chatroom', 'sender_profile', 'sender_ip', 'sender_nickname', 'content', 'created_date')

    def get_sender_nickname(self, obj):
        if obj.sender_profile is None:
            return obj.chatroom.question.nickname
        else:
            return None
