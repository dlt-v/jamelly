from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>/', views.TodoDetailAPIView.as_view()),
    path('<int:pk>/update/', views.TodoUpdateAPIView.as_view()),
    path('<int:pk>/delete/', views.TodoDeleteAPIView.as_view()),
    path('', views.TodoListCreateAPIView.as_view()),
]
