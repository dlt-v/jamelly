from rest_framework import serializers
from notebook.models import Notebook, NoteSnippet
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    notebooks = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Notebook.objects.all()
    )

    class Meta:
        model = User
        fields = ['id', 'username', 'notebooks']


class NotebookSerializer(serializers.ModelSerializer):
    owner_id = serializers.ReadOnlyField(source='owner_id.id')
    note_snippets = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=NoteSnippet.objects.all()
    )

    class Meta:
        model = Notebook
        fields = ['id', 'name', 'created_at', 'owner_id', 'note_snippets']


class NoteSnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoteSnippet
        fields = ['id', 'content', 'created_at']
