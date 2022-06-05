from notebook.models import Notebook, NoteSnippet
from notebook.serializers import NotebookSerializer, NoteSnippetSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class NotebookList(APIView):
    '''
    Lists all the notebooks or creates a new notebook.
    '''

    def get(self, request, format=None):
        notebooks = Notebook.objects.all()
        serializer = NotebookSerializer(notebooks, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = NotebookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
