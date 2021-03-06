from rest_framework import serializers
from notebook.models import Notebook, NoteSnippet
from todos.models import Todo
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    notebooks = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Notebook.objects.all()
    )
    todos = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Todo.objects.all()
    )

    class Meta:
        model = User
        fields = ['id', 'username', 'notebooks', 'todos', 'email']


class NotebookSerializer(serializers.ModelSerializer):
    owner_id = serializers.ReadOnlyField(source='owner_id.id')
    # note_snippets = serializers.PrimaryKeyRelatedField(
    #     many=True,
    #     queryset=NoteSnippet.objects.all()
    # )

    class Meta:
        model = Notebook
        # remember to add 'note_snippets' later on
        fields = ['id', 'name', 'created_at', 'owner_id']


class NoteSnippetSerializer(serializers.ModelSerializer):
    # notebook_id = serializers.ReadOnlyField(source='notebook_id.id')
    owner_id = serializers.ReadOnlyField(source='owner_id.id')

    class Meta:
        model = NoteSnippet
        # remember to change owner_id to notebook_id later on
        fields = ['id', 'content', 'created_at', 'owner_id', 'title']
