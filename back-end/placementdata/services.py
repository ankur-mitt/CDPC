from .models import PlacementData
from .serializers import PlacementDataSerializer
from django.db import transaction

# @transaction.atomic
def get_placement_data(**kwargs):
    return PlacementDataSerializer(PlacementData.objects.filter(**kwargs),many = True)

def get_placement_data_by_id(id):
    return PlacementData.objects.get(id = id)

# def update_calender(id,data):



def delete_placement(current_resource,request):
    current_resource.soft_delete(request.user)

