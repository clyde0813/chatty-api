from rest_framework import serializers

from .models import Board, Post, Comment, File
from users.serializers import ProfileSerializer
from users.models import Profile


class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = ('id', 'name')


class PostSerializer(serializers.ModelSerializer):
    author_username = serializers.SerializerMethodField()
    author_image = serializers.SerializerMethodField()
    like = serializers.SerializerMethodField()
    # files = serializers.ListSerializer(source='community_file')

    class Meta:
        model = Post
        fields = (
        'id', 'author_username', 'author_image', 'title', 'content', 'like', 'created_date', 'modified_date')

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

    def get_files(self, obj):
        instance = obj.community_file.all()
        return instance


class PostCreateSerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=30, required=True, write_only=True)
    content = serializers.CharField(max_length=140, required=True, write_only=True)
    anonymity_status = serializers.BooleanField(required=True, write_only=True)

    class Meta:
        model = Post
        fields = ('title', 'content', 'anonymity_status',)


class CommentSerializer(serializers.ModelSerializer):
    author_username = serializers.SerializerMethodField()
    author_image = serializers.SerializerMethodField()
    child_comments = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ('id', 'author_username', 'author_image', 'content', 'created_date', 'modified_date', 'child_comments')

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

    def get_child_comments(self, obj):
        queryset = obj.community_parent_comment.order_by("-created_date")
        serializer = CommentSerializer(queryset, many=True)
        return serializer.data


class PostDetailSerializer(serializers.ModelSerializer):
    post = PostSerializer(source='*')
    comments = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ('post', 'comments')

    def get_comments(self, obj):
        queryset = obj.community_comment.filter(parent_comment__isnull=True).order_by("-created_date")
        serializer = CommentSerializer(queryset, many=True)
        return serializer.data
