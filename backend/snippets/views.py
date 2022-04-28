import snippets
from snippets import serializers
from snippets.models import Snippet
from snippets.serializers import SnippetSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class SnippetList(APIView):
    '''
    List all existing snippets or create a new one.
    '''

    def get(self, request, format=None):
        # fetch all snippets
        snippets = Snippet.objects.all()
        # serialize snippets
        serializer = SnippetSerializer(snippets, many=True)
        # return formatted data
        return Response(serializer.data)

    def post(self, request, format=None):
        # validate data for newly created snippet
        serializer = SnippetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        # handle false validation
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SnippetDetail(APIView):
    '''
    Retrieve, update or delete a particular snippet.
    '''

    def get_object(self, pk):
        # see if snippet with such pk even exists
        try:
            return Snippet.objects.get(pk=pk)
        except Snippet.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        # return particular snippet with given pk
        snippet = self.get_object(pk)
        serializer = SnippetSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        # update snippet with the id
        snippet = self.get_object(pk)
        serializer = SnippetSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        # handle false validation
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
