from django.urls import path
from notebook import views

urlpattern = [
    path('notebooks/', views.notebook_list),
    path('notebooks/<int:pk>', views.notebook_detail),
]
