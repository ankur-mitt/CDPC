from django.db import models
from basemodel.models import BaseModel
from department.models import Department
from degree.models import Degree

# Create your models here

class Branch(BaseModel):
    name = models.TextField(blank=True,null=True,max_length=50)
    degree = models.ForeignKey(Degree,on_delete=models.CASCADE)
    department = models.ForeignKey(Department,on_delete=models.CASCADE)

    def __str__(self):
        return self.name