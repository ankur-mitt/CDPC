from rest_framework import serializers
from .models import PlacementData
from basemodel.serializers import BaseSerializer
from placement_course_wise_data.serializers import PlacementBranchDataSerializer


class PlacementDataSerializer(BaseSerializer):
    model = PlacementData

    calender_name = serializers.CharField(source='calendar.name',read_only=True)
    internship = serializers.CharField(source='calendar.is_internship',read_only=True)
    year = serializers.CharField(source='calendar.year_from',read_only=True)
    branch_wise = PlacementBranchDataSerializer(many = True, required=False, read_only=True )
    class Meta:
        model = PlacementData
        fields = [
                  'id',
                  'calendar',
                  'calender_name',
                  'internship',
                  'year',
                  'branch_wise',
                  'highest_ctc',
                  'mean_ctc',
                  'median_ctc',
                  'number_of_students',
                  'number_of_companies',
                  'number_of_placed',
                  'pg_highest_ctc',
                  'pg_median_ctc',
                  'pg_number_of_students',
                  'pg_number_of_companies',
                  'pg_number_of_placed',
                  'ug_highest_ctc',
                  'ug_median_ctc',
                  'ug_number_of_students',
                  'ug_number_of_companies',
                  'ug_number_of_placed'
                ]
        read_only_fields = ['id', 'calender', 'internship', 'year', 'branch_wise']
        write_only_fields = ['calender']


