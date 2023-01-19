from rest_framework import serializers
from .models import Department
from basemodel.serializers import BaseSerializer

class DepartmentSerializer(BaseSerializer):
    HOD = serializers.CharField(source='HOD.username')
    DFR = serializers.CharField(source='DFR.username')
    model = Department
    class Meta:
        model = Department
        fields = ['id','name','shortcut','description','HOD','DFR']