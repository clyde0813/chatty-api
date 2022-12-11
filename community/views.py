import logging
from drf_yasg.utils import swagger_auto_schema
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework import generics, status

from config.ip_address_gatherer import get_client_ip
from .models import Board, Post, Comment, File
from .serializers import BoardSerializer, PostSerializer, PostCreateSerializer, CommentSerializer, PostDetailSerializer

logger = logging.getLogger('chatty')


class CustomPagination(PageNumberPagination):
    page_size = 5

    def get_paginated_response(self, data):
        return Response({'next': self.page.next_page_number() if self.page.has_next() else None,
                         'previous': self.page.previous_page_number() if self.page.has_previous() else None,
                         'results': data})


# Create your views here.

class BoardAPIView(generics.GenericAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

    @swagger_auto_schema(tags=['커뮤니티 게시판 리스트'])
    def get(self, request):
        serializer = BoardSerializer(self.queryset.all(), many=True)
        logger.info('Community List Get Success IP : ' + str(get_client_ip(request)))
        return Response(serializer.data, status=status.HTTP_200_OK)


class PostListAPIView(generics.GenericAPIView):
    queryset = Post.objects.all()

    @swagger_auto_schema(tags=['커뮤니티 게시판 게시물 목록'])
    def get(self, request, board_id):
        paginator = CustomPagination()
        result_page = paginator.paginate_queryset(self.queryset.filter(board_id=board_id).order_by("-created_date"),
                                                  request)
        serializer = PostSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

    @swagger_auto_schema(tags=['커뮤니티 게시물 등록'], request_body=PostCreateSerializer)
    def post(self, request, board_id):
        if request.user.is_authenticated:
            if Board.objects.filter(id=board_id).exists():
                Post.objects.create(board_id=board_id, title=request.data['title'], content=request.data['content'],
                                    anonymity_status=request.data['anonymity_status'], author=request.user,
                                    author_ip=get_client_ip(request))
                return Response({'info': '게시물 등록 완료'}, status=status.HTTP_201_CREATED)
            else:
                return Response({'error': '존재하지 않는 게시판입니다.'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': '로그인 후 이용가능합니다.'}, status=status.HTTP_400_BAD_REQUEST)


class PostAPIView(generics.GenericAPIView):
    queryset = Post.objects.all()

    @swagger_auto_schema(tags=['게시물 상세 조회'])
    def get(self, request, board_id, post_id):
        if self.queryset.filter(board_id=board_id, id=post_id).exists():
            serializer = PostDetailSerializer(self.queryset.filter(board_id=board_id, id=post_id).get())
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'error': '존재하지 않는 게시물입니다.'}, status=status.HTTP_400_BAD_REQUEST)
