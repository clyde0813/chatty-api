from rest_framework.views import exception_handler


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
    if response is not None:
        try:
            response.data['error'] = str(response.data["detail"])
        except Exception as e:
            pass
        response.data['status_code'] = response.status_code
    return response
