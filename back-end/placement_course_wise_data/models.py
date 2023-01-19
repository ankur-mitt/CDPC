from django.db import models
from basemodel.models import BaseModel
from branch.models import Branch
from placementdata.models import PlacementData

# Create your models here

class PlacementBranchData(BaseModel):
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE)
    placement_data = models.ForeignKey(PlacementData,related_name='branch_wise',on_delete=models.CASCADE)
    mean_ctc =  models.DecimalField(max_digits=12, decimal_places=2)
    highest_ctc =  models.DecimalField(max_digits=12, decimal_places=2)
    median_ctc =  models.DecimalField(max_digits=12, decimal_places=2)
    number_of_students = models.IntegerField()
    number_of_placed = models.IntegerField()

    class Meta:
        unique_together = ('branch','placement_data')

    def __str__(self):
        return self.branch.name + ' ' + self.placement_data.calendar.name