from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from notebook import views

urlpatterns = [
    path('notebooks/', views.NotebookList.as_view()),
    path('notebooks/<int:pk>/', views.NotebookDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)
