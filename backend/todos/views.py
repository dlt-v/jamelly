from rest_framework import generics, permissions, authentication

from .models import Todo
from .serializers import TodoSerializer


class TodoListCreateAPIView(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def perform_create(self, serializer):
        title = serializer.validated_data.get('name')
        serializer.save()


class TodoDetailAPIView(generics.RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class TodoUpdateAPIView(generics.UpdateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def perform_update(self, serializer):
        instance = serializer.save()


class TodoDeleteAPIView(generics.DestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def perform_destroy(self, instance):
        super().perform_destroy(instance)
