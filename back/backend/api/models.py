from django.db import models

# Create your models here.


# polyclinic
class Polyclinic(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)


class Mkbten(models.Model):
    code = models.CharField(max_length=255, blank=True, null=True, unique=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    def __str__(self):
        return self.code


class Naznachenie(models.Model):
    diagnos_code = models.CharField(max_length=255, blank=True, null=True, unique=True)
    diagnos = models.JSONField(max_length=255, blank=True, null=True, default=dict)
    def __str__(self):
        return self.diagnos_code
