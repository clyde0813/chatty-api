import logging

from django.contrib.auth.models import User

from config.ip_address_gatherer import get_client_ip
from user.models import APNsDevice
from firebase_admin import messaging
from celery import shared_task

logger = logging.getLogger('chatty')


@shared_task()
def fcm_send(ipAddress, username, msg):
    APNsDevice_list = list(
        APNsDevice.objects.filter(user=User.objects.get(username=username)).values_list('token', flat=True))
    print(APNsDevice_list)
    fcm_token_list = APNsDevice_list
    for i in fcm_token_list:
        try:
            messaging.send(messaging.Message(
                notification=messaging.Notification(
                    title='Chatty',
                    body=str(msg),
                ),
                token=i,
            ))
            logger.info("APNs FCM send() success Target : " + str(username) + " IP : " + str(ipAddress))
        except Exception as e:
            logger.error('APNs ' + str(e) + '\ntoken : ' + i)
            APNsDevice.objects.filter(token=i).all().delete()
