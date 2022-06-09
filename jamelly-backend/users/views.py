from users.serializers import RegistrationSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['POST'])
def registration_view(request):
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = {}

        if serializer.is_valid():
            new_user = serializer.save()
            data['response'] = 'Successfully registered new user.'
            data['email'] = new_user.email
            data['username'] = new_user.username
        else:
            data = serializer.errors

        return Response(data)
