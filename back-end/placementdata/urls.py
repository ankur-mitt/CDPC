from django.contrib import admin
from django.urls import path
app_name = 'placements'
from .views import placement_create,placements_show,placement_view

urlpatterns = [
    path('create/',placement_create.as_view()),
    path('list/',placements_show.as_view()),
    path('<int:pk>/',placement_view.as_view())
]
