from .views import branches_show,branch_create,branch_view
from django.urls import path
app_name = 'branches'
urlpatterns = [
    path('create/',branch_create),
    path('list/',branches_show),
    path('<int:pk>/',branch_view)
]
