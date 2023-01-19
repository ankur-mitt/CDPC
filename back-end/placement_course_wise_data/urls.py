from django.contrib import admin
from django.urls import path
app_name = 'placements'
from .views import placementdata



urlpatterns = [
    path('show/',placementdata),
]
