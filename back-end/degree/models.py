from django.db import models
from basemodel.models import BaseModel


# Create your models here

class Degree(BaseModel):
    name = models.TextField(blank=True,null=True,max_length=50)
    shortcut = models.TextField(blank=True,null=True,max_length=10)
    description = models.TextField(blank=True,null=True,max_length=5000)
    duration = models.IntegerField()
    number_of_semester = models.IntegerField()

    def __str__(self):
        return self.shortcut