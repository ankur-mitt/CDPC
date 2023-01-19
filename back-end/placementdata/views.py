# from django.shortcuts import render,get_object_or_404
from rest_framework.response import Response
from rest_framework import status 
from .models import PlacementData
from .serializers import PlacementDataSerializer
from .services import *
from rest_framework.views import APIView


class placements_show(APIView):
    def get(self,request,*args,**kwargs):
        serialized_data = get_placement_data()
        return Response(serialized_data.data)

class placement_create(APIView):
    def post(self,request,*args,**kwargs):
        serializedData = PlacementDataSerializer(data = request.data,context={'user_id': request.user})
        if serializedData.is_valid():
            serializedData.save()
            return Response(serializedData.data)
        else:
            return Response(serializedData.errors)

class placement_view(APIView):
    def get(self,request,pk,*args,**kwargs):
        try:
            current_resource = get_placement_data_by_id(pk)
        except:
            return Response({'errors':'Invalid Referennce'},status = status.HTTP_404_NOT_FOUND)
        serializer = PlacementDataSerializer(current_resource)
        return Response(serializer.data)
    
    def put(self,request,pk,*args,**kwargs):
        try:
            current_resource = get_placement_data_by_id(pk)
        except:
            return Response({'errors':'Invalid Referennce'},status = status.HTTP_404_NOT_FOUND)    
        serializer = PlacementDataSerializer(current_resource,data = request.data,context={'user_id': request.user})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
    def delete(self,request,pk,*args,**kwargs):
        try:
            current_resource = get_placement_data_by_id(pk)
        except:
            return Response({'errors':'Invalid Referennce'},status = status.HTTP_404_NOT_FOUND)
        delete_placement(current_resource,request)
        return Response(status = status.HTTP_204_NO_CONTENT)




