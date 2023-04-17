from rest_framework.exceptions import APIException


class DataInaccuracyError(APIException):
    status_code = 400
    default_detail = "입력값이 잘못되었습니다."
    default_code = "Validate Failed"
