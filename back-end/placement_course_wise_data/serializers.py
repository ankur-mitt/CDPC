from rest_framework import serializers
from .models import PlacementBranchData
from basemodel.serializers import BaseSerializer

class PlacementBranchDataSerializer(BaseSerializer):
    branch = serializers.CharField(source='branch.name')
    model = PlacementBranchData
    class Meta:
        model = PlacementBranchData
        fields = ['id',
                  'branch',
                  'mean_ctc',
                  'highest_ctc',
                  'median_ctc',
                  'number_of_students',
                  'number_of_placed',]
