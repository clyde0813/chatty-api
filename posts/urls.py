from django.urls import path
from .views import QuestionGetAPIView, QuestionCreateAPIView, QuestionUnansweredAPIView, AnswerCreateAPIView, \
    QuestionRejectedAPIView, TimelineAPIView

urlpatterns = [
    path('rejected', QuestionRejectedAPIView.as_view()),
    path('<str:username>', QuestionGetAPIView.as_view()),
    path('', QuestionCreateAPIView.as_view()),

    path('answer', AnswerCreateAPIView.as_view()),
    path('unanswered', QuestionUnansweredAPIView.as_view()),

    path('timeline', TimelineAPIView.as_view())
]
