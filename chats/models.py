from django.db import models


# Create your models here.
class AdjectiveList(models.Model):
    word = models.CharField(max_length=20, primary_key=True)


class NounList(models.Model):
    word = models.CharField(max_length=20, primary_key=True)
