from rest_framework import serializers

from .models import Board, Post, Comment, Attachment
from users.serializers import ProfileSerializer
from users.models import Profile


class BoardListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = ('pk', 'name')


class BoardPostSerializer(serializers.ModelSerializer):
    author_username = serializers.SerializerMethodField()
    author_image = serializers.SerializerMethodField()
    like = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ('pk', 'author_username', 'author_image', 'title', 'content', 'like', 'created_date', 'modified_date')

    def get_author_username(self, obj):
        if not obj.anonymity_status:
            return obj.author.username
        else:
            return "익명"

    def get_author_image(self, obj):
        if not obj.anonymity_status:
            return obj.author.profile.profile_image.url
        else:
            return "https://chatty-s3-dev.s3.ap-northeast-2.amazonaws.com/default.png"

    def get_like(self, obj):
        if obj.like:
            return obj.like.count()
        else:
            return 0
