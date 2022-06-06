from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from notebook import views

urlpatterns = [
    path('notebooks/', views.NotebookList.as_view()),
    path('notebooks/<int:pk>/', views.NotebookDetail.as_view()),
    path('notesnippets/', views.NoteSnippetList.as_view()),
    path('notesnippets/<int:pk>/', views.NoteSnippetDetail.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)
