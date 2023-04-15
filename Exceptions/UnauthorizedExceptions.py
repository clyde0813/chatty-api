from rest_framework.exceptions import APIException


class UnauthorizedError(APIException):
    status_code = 401
    default_detail = "APNs 등록에 실패하였습니다."
    default_code = "Validate Failed"
