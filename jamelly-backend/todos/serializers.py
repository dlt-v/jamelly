from rest_framework import serializers
from todos.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    owner_id = serializers.ReadOnlyField(source='owner_id.id')

    class Meta:
        model = Todo
        fields = ['id', 'name', 'created_at', 'content', 'status']
