from django.urls import path
from .views import QuestionGetAPIView, QuestionCreateAPIView, QuestionArrivedAPIView, AnswerCreateAPIView, \
    QuestionRefusedAPIView, TimelineAPIView

urlpatterns = [
    path('/user/<str:username>', QuestionGetAPIView.as_view()),
    path('', QuestionCreateAPIView.as_view()),

    path('/answer', AnswerCreateAPIView.as_view()),
    path('/arrived', QuestionArrivedAPIView.as_view()),
    path('/refused', QuestionRefusedAPIView.as_view()),

    path('/timeline', TimelineAPIView.as_view())
]
