from django.db import models
from basemodel.models import BaseModel
from calender.models import Calender

# Create your models here

class PlacementData(BaseModel):
    calendar = models.OneToOneField(Calender,on_delete=models.CASCADE)
    mean_ctc =  models.DecimalField(max_digits=12, decimal_places=2)
    highest_ctc =  models.DecimalField(max_digits=12, decimal_places=2)
    median_ctc =  models.DecimalField(max_digits=12, decimal_places=2)
    number_of_students = models.IntegerField()
    number_of_companies = models.IntegerField()
    number_of_placed = models.IntegerField()
    ug_highest_ctc =  models.DecimalField(max_digits=12, decimal_places=2, blank = True,null = True)
    ug_median_ctc =  models.DecimalField(max_digits=12, decimal_places=2, blank = True,null = True)
    ug_number_of_students = models.IntegerField( blank = True,null = True)
    ug_number_of_companies = models.IntegerField( blank = True,null = True)
    ug_number_of_placed = models.IntegerField( blank = True,null = True)
    pg_highest_ctc =  models.DecimalField(max_digits=12, decimal_places=2, blank = True,null = True)
    pg_median_ctc =  models.DecimalField(max_digits=12, decimal_places=2, blank = True,null = True)
    pg_number_of_students = models.IntegerField( blank = True,null = True)
    pg_number_of_companies = models.IntegerField( blank = True,null = True)
    pg_number_of_placed = models.IntegerField( blank = True,null = True)
    
    def __str__(self):
        return self.calendar.name
    
    class Meta:
        unique_together = ('calendar',)