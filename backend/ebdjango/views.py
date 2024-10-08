from django.contrib.auth import authenticate
from django.http import JsonResponse
from rest_framework.decorators import api_view

@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)

    if user is not None:
        return JsonResponse({
            'message': 'Login successful',
            'first_name': user.first_name,
            'last_name': user.last_name,
            'username': user.username,
        })
    return JsonResponse({'error': 'Invalid credentials'}, status=400)