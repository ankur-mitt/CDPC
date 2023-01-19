from django.db import models
from basemodel.models import BaseModel
from django.contrib.auth.models import User


# Create your models here

class Department(BaseModel):
    name = models.TextField(blank=True,null=True,max_length=50)
    shortcut = models.TextField(blank=True,null=True,max_length=10)
    description = models.TextField(blank=True,null=True,max_length=5000)
    HOD = models.ForeignKey(User,on_delete=models.CASCADE,related_name = 'HOD')
    DFR = models.ForeignKey(User,on_delete=models.CASCADE,related_name = 'DFR')

    def __str__(self):
        return self.shortcut