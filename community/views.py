import logging
from drf_yasg.utils import swagger_auto_schema
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework import generics, status

from config.ip_address_gatherer import get_client_ip
from .models import Board, Post, Comment, Attachment
from .serializers import BoardListSerializer, BoardPostListSerializer, BoardPostCreateSerializer

logger = logging.getLogger('chatty')


class CustomPagination(PageNumberPagination):
    page_size = 5

    def get_paginated_response(self, data):
        return Response({'next': self.page.next_page_number() if self.page.has_next() else None,
                         'previous': self.page.previous_page_number() if self.page.has_previous() else None,
                         'results': data})


# Create your views here.

class BoardListAPIView(generics.GenericAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardListSerializer

    @swagger_auto_schema(tags=['커뮤니티 게시판 리스트'])
    def get(self, request):
        serializer = BoardListSerializer(self.queryset.all(), many=True)
        logger.info('Community List Get Success IP : ' + str(get_client_ip(request)))
        return Response(serializer.data, status=status.HTTP_200_OK)


class BoardPostAPIView(generics.GenericAPIView):
    queryset = Post.objects.all()

    @swagger_auto_schema(tags=['커뮤니티 게시판 게시물 목록'])
    def get(self, request, board_id):
        paginator = CustomPagination()
        result_page = paginator.paginate_queryset(self.queryset.filter(board_id=board_id).order_by("-created_date"),
                                                  request)
        serializer = BoardPostListSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

    @swagger_auto_schema(tags=['커뮤니티 게시물 등록'])
    def post(self, request, board_id):
        serializer = BoardPostCreateSerializer(data=request.data)
        if request.user.is_authenticated:
            try:
                Post.objects.create(board_id=board_id, title=request.data['title'], content=['content'],
                                    anonymity_status=request.data['anonymity_status'], author=request.user,
                                    author_ip=get_client_ip(request))
                return Response({'info': '게시물 등록 완료'}, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({'error': '게시물 등록 실패', 'message': e}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': '로그인 후 이용가능합니다.'}, status=status.HTTP_400_BAD_REQUEST)
