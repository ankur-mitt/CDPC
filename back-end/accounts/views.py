from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import viewsets,generics
from rest_framework import permissions 
from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required

from .models import CustomUser as User
from .decorators import for_students

# Create your views here.
 
class UserViewSet(generics.ListCreateAPIView):
	queryset = User.objects.all().order_by('-date_joined')
	serializer_class = UserSerializer
	# permission_class = [permissions.IsAuthenticated]


@method_decorator([login_required,for_students],name='dispatch')
class IndexView(APIView):
	
	def get(self,request,format=None):
		user = [ user.email for user in User.objects.all()]
		return Response(user)