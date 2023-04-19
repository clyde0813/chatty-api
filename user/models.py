import binascii
import datetime
import os

from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django_resized import ResizedImageField


# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name='profile')
    profile_name = models.CharField(max_length=50, null=True)
    follower = models.ManyToManyField(User, related_name='follower')
    following = models.ManyToManyField(User, related_name='following')
    profile_image = ResizedImageField(upload_to='profile/', default='default.png', quality=65, scale=0.5)
    background_image = ResizedImageField(upload_to='background/', default='default_background.png', quality=65,
                                         scale=0.5)
    profile_message = models.CharField(max_length=50, blank=True, null=True)
    recent_access_ip = models.CharField(max_length=20, blank=True)


class APNsDevice(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=200)
    created_date = models.DateTimeField(auto_now_add=True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
