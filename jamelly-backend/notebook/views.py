from notebook import serializers
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


class NotebookDetail(APIView):
    '''
    Retrieve, edit, or delete a specific notebook instance.
    '''

    def get_object(self, pk):
        '''
        Tries to find an existing object.
        '''
        try:
            return Notebook.objects.get(pk=pk)
        except:
            raise Http404

    def get(self, request, pk, format=None):
        notebook = self.get_object(pk)
        serializer = NotebookSerializer(notebook)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        notebook = self.get_object(pk=pk)
        serializer = NotebookSerializer(notebook, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        notebook = self.get_object(pk=pk)
        notebook.delete()
        return Response(status=status.HTTP_200_OK)
