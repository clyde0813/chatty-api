from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from user.models import Profile


class Question(models.Model):
    author_ip = models.CharField(max_length=20)
    target_profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='question_target_profile')
    author_profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='question_author_profile',
                                       null=True)
    anonymous_status = models.BooleanField(default=True)
    content = models.CharField(max_length=100)
    refusal_status = models.BooleanField(default=False)
    refused_date = models.DateTimeField(null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    delete_status = models.BooleanField(default=False)


class Answer(models.Model):
    question = models.OneToOneField(Question, on_delete=models.CASCADE, related_name='answer')
    author_profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='answer_author_profile')
    author_ip = models.CharField(max_length=20)
    content = models.CharField(max_length=100)
    created_date = models.DateTimeField(auto_now_add=True)


class QuestionReport(models.Model):
    author = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='question_report_profile')
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='question_report')
    created_date = models.DateTimeField(auto_now_add=True)
