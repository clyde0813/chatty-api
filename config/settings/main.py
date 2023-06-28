from .base import *

DEBUG = False

ALLOWED_HOSTS = ['chatty.kr']

# AWS S3 Storages
AWS_STORAGE_BUCKET_NAME = get_secret('AWS_BUCKET_NAME')
AWS_S3_CUSTOM_DOMAIN = get_secret('AWS_S3_DOMAIN')
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
}
AWS_DEFAULT_ACL = 'public-read'

DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': get_secret('NAME'),
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
