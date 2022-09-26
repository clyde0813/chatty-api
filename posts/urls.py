from django.urls import path

from rest_framework import routers

from .views import QuestionViewSet

routers = routers.SimpleRouter()
routers.register('question', QuestionViewSet)

urlpatterns = routers.urls
