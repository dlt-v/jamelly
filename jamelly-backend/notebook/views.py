from notebook.models import Notebook, NoteSnippet
from notebook.serializers import NotebookSerializer, NoteSnippetSerializer
from rest_framework import generics

from django.contrib.auth.models import User
from notebook.serializers import UserSerializer

from rest_framework import permissions


# For Users


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# For Notebooks


class NotebookList(generics.ListCreateAPIView):
    queryset = Notebook.objects.all()
    serializer_class = NotebookSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner_id=self.request.user)


class NotebookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notebook.objects.all()
    serializer_class = NotebookSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


# For Note Snippets

class NoteSnippetList(generics.ListCreateAPIView):
    queryset = NoteSnippet.objects.all()
    serializer_class = NoteSnippetSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class NoteSnippetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = NoteSnippet.objects.all()
    serializer_class = NoteSnippetSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
