from rest_framework.exceptions import APIException


class EmailAlreadyTakenError(APIException):
    status_code = 400
    default_detail = "이미 사용중인 이메일입니다."
    default_code = "Validate Failed"


class UsernameAlreadyTakenError(APIException):
    status_code = 400
    default_detail = "이미 사용중인 아이디입니다."
    default_code = "Validate Failed"


class PasswordInconsistencyError(APIException):
    status_code = 400
    default_detail = "비밀번호가 일치하지 않습니다."
    default_code = "Validate Failed"


class PasswordLengthError(APIException):
    status_code = 400
    default_detail = "비밀번호 길이가 부적합합니다."
    default_code = "Validate Failed"
