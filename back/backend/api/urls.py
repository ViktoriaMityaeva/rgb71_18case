from django.urls import path
from django.urls import path, re_path, include
from rest_framework import routers

from api.views import *

router = routers.DefaultRouter() #SimpleRouter

router.register(r'mkbten', MkbtenApiView)
router.register(r'naznachenie', NaznachenieApiView)

urlpatterns = [
    path('', include(router.urls)),
]
