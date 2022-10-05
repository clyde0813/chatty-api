import binascii
import os

from django.db import models
from posts.models import Question
from users.models import Profile


# Create your models here.
class AdjectiveList(models.Model):
    word = models.CharField(max_length=20, primary_key=True)


class NounList(models.Model):
    word = models.CharField(max_length=20, primary_key=True)


class ChatRoom(models.Model):
    question = models.OneToOneField(Question, on_delete=models.CASCADE, related_name='chat_room')
    key = models.CharField(max_length=40)
    created_date = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.key:
            self.key = self.generate_key()
        return super().save(*args, **kwargs)

    @classmethod
    def generate_key(cls):
        return binascii.hexlify(os.urandom(20)).decode()


class Chat(models.Model):
    chatroom = models.ForeignKey(ChatRoom, on_delete=models.CASCADE, related_name='chats')
    sender_profile = models.ForeignKey(Profile, on_delete=models.CASCADE, blank=True, null=True,
                                       related_name='chat_sender_profile')
    sender_ip = models.CharField(max_length=20)
    content = models.CharField(max_length=100)
    created_date = models.DateTimeField(auto_now=True)
