from django.urls import path
from .views import (UserViewSet, IndexView )

app_name = 'accounts'

urlpatterns = [
	path('',UserViewSet.as_view()),
	path('index/',IndexView.as_view()),
]