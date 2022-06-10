from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from notebook import views

urlpatterns = [
    path(
        'notebooks/',
        views.NotebookList.as_view(),
        name='notebook-list'
    ),
    path(
        'notebooks/<int:pk>/',
        views.NotebookDetail.as_view(),
        name='notebook-detail'
    ),
    path(
        'notesnippets/',
        views.NoteSnippetList.as_view(),
        name='notesnippet-list'
    ),
    path(
        'notesnippets/<int:pk>/',
        views.NoteSnippetDetail.as_view(),
        name='notesnippet-detail'
    ),
    path(
        'users/',
        views.UserList.as_view(),
        name='user-list'
    ),
    path(
        'users/<int:pk>/',
        views.UserDetail.as_view(),
        name='user-detail'
    ),
]
urlpatterns = format_suffix_patterns(urlpatterns)
