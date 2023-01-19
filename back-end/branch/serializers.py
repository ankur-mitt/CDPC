from rest_framework import serializers
from .models import Branch
from basemodel.serializers import BaseSerializer
from department.serializers import DepartmentSerializer
from degree.serializers import DegreeSerializer

class BranchSerializer(BaseSerializer):
    degree = DegreeSerializer(read_only=True)
    department = DepartmentSerializer(read_only=True)
    model = Branch
    class Meta:
        model = Branch
        fields = ['id','name','degree','department']



