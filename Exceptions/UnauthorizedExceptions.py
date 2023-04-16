from rest_framework.exceptions import APIException


class UnauthorizedError(APIException):
    status_code = 401
    default_detail = "유효하지 않은 사용자 입니다."
    default_code = "Validate Failed"
