import boto3

from .base import *

DEBUG = True

ALLOWED_HOSTS = ['chatty.kr', "*"]

# AWS S3 Storages
AWS_STORAGE_BUCKET_NAME = get_secret('AWS_DEV_BUCKET_NAME')
AWS_S3_CUSTOM_DOMAIN = get_secret('AWS__DEV_S3_DOMAIN')
AWS_REGION = get_secret('AWS_REGION')
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
}
AWS_LOG_GROUP = 'Chatty'
AWS_LOG_STREAM = 'Chatty-dev'

AWS_DEFAULT_ACL = 'public-read'

DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': get_secret('DEV_NAME'),
        'TEST': {
            'NAME': get_secret('TEST_NAME'),
        },
        'USER': get_secret('USER'),
        'PASSWORD': get_secret('PASSWORD'),
        'HOST': get_secret('HOST'),
        'PORT': get_secret('PORT'),
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
            'charset': 'utf8mb4',
            'use_unicode': True,
        }
    },
}

SWAGGER_SETTINGS = {
    'SECURITY_DEFINITIONS': {
        'Access_Token': {
            'type': 'apiKey',
            'in': 'header',
            'name': 'Authorization'
        }
    },
}

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_METHODS = (
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
)

CORS_ALLOW_HEADERS = (
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
)

boto3_logs_client = boto3.client("logs", region_name=AWS_REGION,
                                 aws_access_key_id=AWS_ACCESS_KEY_ID,
                                 aws_secret_access_key=AWS_SECRET_ACCESS_KEY)

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'aws': {
            # you can add specific format for aws here
            # if you want to change format, you can read:
            #    https://stackoverflow.com/questions/533048/how-to-log-source-file-name-and-line-number-in-python/44401529
            'format': u"%(asctime)s [%(levelname)-8s] %(message)s [%(pathname)s:%(lineno)d]",
            'datefmt': "%Y-%m-%d %H:%M:%S"
        },
    },
    'handlers': {
        'watchtower': {
            'level': 'INFO',
            'class': 'watchtower.CloudWatchLogHandler',
            'boto3_client': boto3_logs_client,
            'log_group': AWS_LOG_GROUP,
            'stream_name': AWS_LOG_STREAM,
            'formatter': 'aws',  # use custom format
        },
    },
    'loggers': {
        'chatty': {
            'level': 'INFO',
            'handlers': ['watchtower'],
        },
        # add your other loggers here...
    },
}
