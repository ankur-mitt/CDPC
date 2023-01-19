from django.db import models
from django.contrib.auth.models import User
import datetime
from .manager import NonDeleted
# Create your models here.
class BaseModel(models.Model):
    is_deleted = models.BooleanField(default=False)
    created_at = models.DateTimeField(null=True,blank=True)
    updated_at = models.DateTimeField(null=True,blank=True)
    deleted_at = models.DateTimeField(null=True,blank=True)
    created_by = models.ForeignKey(User,on_delete=models.CASCADE, related_name = '%(app_label)s_%(class)s_created_by',null=True,blank=True)
    updated_by = models.ForeignKey(User,on_delete=models.CASCADE, related_name = '%(app_label)s_%(class)s_updated_by',null=True,blank=True)
    deleted_by = models.ForeignKey(User,on_delete=models.CASCADE, related_name = '%(app_label)s_%(class)s_deleted_by',null=True,blank=True)
    
    allobjects = models.Manager()
    objects = NonDeleted()
    
    def soft_delete(self,user):
        self.is_deleted = True
        self.deleted_at = datetime.datetime.now()
        self.deleted_by = user
        super(BaseModel, self).save()

    
    def save(self, *args, **kwargs):
        self.updated_at = datetime.datetime.now()
        if self.created_by is None:
            self.created_by = self.updated_by
            self.created_at = self.updated_at
        super(BaseModel, self).save(*args, **kwargs)


    def restore(self):
        self.is_deleted = False

    class Meta:
        abstract = True