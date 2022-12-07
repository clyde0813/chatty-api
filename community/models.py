from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Board(models.Model):
    name = models.CharField(max_length=50)


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="community_post_author")
    author_ip = models.CharField(max_length=20)
    title = models.CharField(max_length=30)
    content = models.CharField(max_length=140)
    board = models.ForeignKey(Board, on_delete=models.CASCADE)
    like = models.ManyToManyField(User, related_name="community_post_like")
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(default=None, null=True)
    delete_status = models.BooleanField(default=False)
    anonymity_status = models.BooleanField(default=False)


class Comment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="community_comment_author")
    author_ip = models.CharField(max_length=20)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="community_comment")
    parent_comment = models.ForeignKey("self", on_delete=models.CASCADE, related_name="community_parent_comment")
    content = models.CharField(max_length=140)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(default=None, null=True)
    delete_status = models.BooleanField(default=False)


class Attachment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="community_attachment_author")
    author_ip = models.CharField(max_length=20)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="community_attachment")
    created_date = models.DateTimeField(auto_now_add=True)

