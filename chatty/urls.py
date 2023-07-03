from django.urls import path
from .views import QuestionGetAPIView, QuestionCreateAPIView, QuestionArrivedAPIView, QuestionReportView, \
    AnswerCreateAPIView, QuestionRefuseAPIView, QuestionSentView, TimelineAPIView

urlpatterns = [
    path('/user/<str:username>', QuestionGetAPIView.as_view()),
    path('', QuestionCreateAPIView.as_view()),

    path('/answer', AnswerCreateAPIView.as_view()),
    path('/arrived', QuestionArrivedAPIView.as_view()),
    path('/refuse', QuestionRefuseAPIView.as_view()),
    path('/report', QuestionReportView.as_view()),
    path('/sent', QuestionSentView.as_view()),

    path('/timeline', TimelineAPIView.as_view())
]
