from django.db import models
from basemodel.models import BaseModel


# Create your models here

class Calender(BaseModel):
    name = models.TextField(blank=True,null=True,max_length=50)
    year_from = models.IntegerField()
    year_to = models.IntegerField()
    students_registered = models.IntegerField()
    is_internship = models.BooleanField(default=False) 

    class Meta:
        unique_together = ('year_from','year_to','is_internship','name')
    
    def __str__(self):
        return self.name