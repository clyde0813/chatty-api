from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from users.models import Profile


class Question(models.Model):
    author_ip = models.CharField(max_length=20)
    nickname = models.CharField(max_length=20)
    target_profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='question_target_profile')
    content = models.CharField(max_length=100)
    refusal_status = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
    delete_status = models.BooleanField(default=False)


class Answer(models.Model):
    question = models.OneToOneField(Question, on_delete=models.CASCADE, related_name='answer')
    author_profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='answer_author_profile')
    author_ip = models.CharField(max_length=20)
    content = models.CharField(max_length=100)
    created_date = models.DateTimeField(auto_now_add=True)


class AdjectiveList(models.Model):
    word = models.CharField(max_length=20, primary_key=True)


class NounList(models.Model):
    word = models.CharField(max_length=20, primary_key=True)
