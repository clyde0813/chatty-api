from rest_framework.exceptions import APIException


class PostDeletionUnavailableException(APIException):
    status_code = 400
    default_detail = '게시물 삭제가 48시간 동안 불가능합니다.'
    default_code = 'post_deletion_unavailable'
