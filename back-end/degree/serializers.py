from rest_framework import serializers
from .models import Degree
from basemodel.serializers import BaseSerializer

class DegreeSerializer(BaseSerializer):
    model = Degree
    class Meta:
        model = Degree
        fields = ['id','name','shortcut','description','duration','number_of_semester']