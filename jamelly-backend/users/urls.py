from django.urls import path
from users.views import registration_view
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path(
        'register/',
        registration_view,
        name='register'
    ), ]
urlpatterns = format_suffix_patterns(urlpatterns)
