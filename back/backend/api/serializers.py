from rest_framework import serializers


from api.models import *



class MkbtenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mkbten
        fields = "__all__"

class NaznachenieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Naznachenie
        fields = "__all__"
