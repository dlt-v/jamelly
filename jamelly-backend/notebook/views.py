from notebook.models import Notebook, NoteSnippet
from notebook.serializers import NotebookSerializer, NoteSnippetSerializer
from rest_framework import generics

class NotebookList(generics.ListCreateAPIView):
    queryset = Notebook.objects.all()
    serializer_class = NotebookSerializer

class NotebookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notebook.objects.all()
    serializer_class = NotebookSerializer