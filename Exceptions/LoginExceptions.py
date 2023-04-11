from rest_framework.exceptions import APIException

class LoginDataMismatchError(APIException):
    status_code = 401
    default_detail = "아이디 또는 비밀번호가 정확하지 않습니다."
    default_code = "Validate Failed"