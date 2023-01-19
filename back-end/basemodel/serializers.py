from rest_framework import serializers
# from .models import Resources
# from django.contrib.auth.models import User

class BaseSerializer(serializers.ModelSerializer):    
    def create(self,data):
        return self.model.objects.create(**data,updated_by = self.context['user_id'])

    def update(self,instance,data):
        x = super().update(instance,data)
        instance.updated_by = self.context['user_id']
        instance.save()
        return instance