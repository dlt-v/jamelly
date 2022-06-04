from rest_framework import serializers
from notebook.models import Notebook, NoteSnippet


class NotebookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notebook
        fields = ['id', 'name', 'created_at']


class NoteSnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoteSnippet
        fields = ['id', 'content', 'created_at']
