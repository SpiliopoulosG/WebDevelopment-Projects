from . import views
from django.urls import path

urlpatterns = [
   path('', views.home, name='home'),
   path('destination/', views.destination, name='destination'),
   path('crew/', views.crew, name='crew'),
   path('technology/', views.technology, name='technology'),
]