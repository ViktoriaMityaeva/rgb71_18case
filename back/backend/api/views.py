from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import action
from api.models import *
from api.serializers import *
from users import authentication
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django_filters import rest_framework as filters


class MkbtenApiView(viewsets.ModelViewSet):
    queryset = Mkbten.objects.all()
    serializer_class = MkbtenSerializer
    authentication_classes = (authentication.CustomUserAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('code', 'name')

class NaznachenieApiView(viewsets.ModelViewSet):
    queryset = Naznachenie.objects.all()
    serializer_class = NaznachenieSerializer
    authentication_classes = (authentication.CustomUserAuthentication,)
    permission_classes = (permissions.AllowAny,)