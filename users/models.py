import datetime

from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django_resized import ResizedImageField
from rest_framework.authtoken.models import Token


# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name='profile')
    follower = models.ManyToManyField(User, related_name='follower')
    following = models.ManyToManyField(User, related_name='following')
    profile_image = ResizedImageField(upload_to='profile/', default='default.png', quality=65, scale=0.5)
    background_image = ResizedImageField(upload_to='background/', default='default_background.png', quality=65,
                                         scale=0.5)
    profile_message = models.CharField(max_length=50, blank=True, null=True)
    deactivated_status = models.BooleanField(default=False)
    ban_until = models.DateTimeField(null=True, blank=True)
    recent_access_ip = models.CharField(max_length=20, blank=True)


class ForbiddenUsername(models.Model):
    username = models.CharField(max_length=200, null=True, blank=True)


class TokenExpiration(models.Model):
    token = models.OneToOneField(Token, on_delete=models.CASCADE)
    expiration_date = models.DateTimeField()


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=Token)
def create_token_expiration(sender, instance, created, **kwargs):
    if created:
        TokenExpiration.objects.create(token=instance, expiration_date=instance.created + datetime.timedelta(hours=6))
