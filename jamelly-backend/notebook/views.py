from notebook.models import Notebook, NoteSnippet
from notebook.permissions import IsOwner
from notebook.serializers import NotebookSerializer, NoteSnippetSerializer, UserSerializer
from rest_framework import authentication
from rest_framework import generics, permissions, status
from django.contrib.auth.models import User
from rest_framework.response import Response


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
    authentication_classes = [authentication.TokenAuthentication]

    def perform_create(self, serializer):
        serializer.save(owner_id=self.request.user)


class NotebookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notebook.objects.all()
    serializer_class = NotebookSerializer
    permission_classes = [IsOwner]
    authentication_classes = [authentication.TokenAuthentication]


# For Note Snippets

class NoteSnippetList(generics.ListCreateAPIView):
    queryset = NoteSnippet.objects.all()
    serializer_class = NoteSnippetSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [authentication.TokenAuthentication]

    def perform_create(self, serializer):
        try:
            notebook = Notebook.objects.get(
                pk=self.request.data.get('notebook_id'))
            serializer.save(notebook_id=notebook)
        except:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class NoteSnippetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = NoteSnippet.objects.all()
    serializer_class = NoteSnippetSerializer
    permission_classes = [IsOwner]
    authentication_classes = [authentication.TokenAuthentication]
