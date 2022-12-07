from django.urls import path
from .views import BoardListGETAPIView, BoardPostGETAPIView

urlpatterns = [
    path('', BoardListGETAPIView.as_view()),
    path('<int:board_id>', BoardPostGETAPIView.as_view())
]
