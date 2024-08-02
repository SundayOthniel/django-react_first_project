from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import UsersSerializer


@api_view()
def fetchUsers(request):
    users = Users.objects.all()
    users_serializer = UsersSerializer(users, many=True)
    return Response(users_serializer.data)