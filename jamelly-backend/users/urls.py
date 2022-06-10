from django.urls import path
from users.views import registration_view
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path(
        'register/',
        registration_view,
        name='register'
    ),
    path(
        'auth/',
        obtain_auth_token,
        name='auth'
    ),
]
urlpatterns = format_suffix_patterns(urlpatterns)
