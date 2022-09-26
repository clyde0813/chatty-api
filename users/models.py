import datetime

from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

from rest_framework.authtoken.models import Token


# Create your models here.
class Profile(models.Model):
    username = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    follower = models.ManyToManyField(User, related_name='follower')
    following = models.ManyToManyField(User, related_name='following')
    image = models.ImageField(upload_to='profile/', default='default.png')
    deactivated_status = models.BooleanField(default=False)
    ban_until = models.DateTimeField(null=True, blank=True)
    test = models.CharField(max_length=10, blank=True, default='1')
    recent_access_ip = models.CharField(max_length=20, blank=True)


class TokenExpiration(models.Model):
    token = models.OneToOneField(Token, on_delete=models.CASCADE)
    expiration_date = models.DateTimeField()


class Report(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    ip_address = models.CharField(max_length=15, blank=True, null=True)
    reported_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reported_user')
    reason = models.TextField()
    date = models.DateTimeField(auto_now_add=True)


class BannedIp(models.Model):
    ip_address = models.CharField(max_length=15, blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(username=instance)


@receiver(post_save, sender=Token)
def create_token_expiration(sender, instance, created, **kwargs):
    if created:
        TokenExpiration.objects.create(token=instance, expiration_date=instance.created + datetime.timedelta(hours=6))
