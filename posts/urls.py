from django.urls import path
from .views import QuestionGetAPIView, QuestionCreateAPIView, QuestionUnansweredAPIView, AnswerCreateAPIView, \
    QuestionRejectedAPIView

urlpatterns = [
    path('rejected', QuestionRejectedAPIView.as_view()),
    path('question/<str:username>', QuestionGetAPIView.as_view()),
    path('unanswered', QuestionUnansweredAPIView.as_view()),
    path('question', QuestionCreateAPIView.as_view()),

    path('answer', AnswerCreateAPIView.as_view())
]
