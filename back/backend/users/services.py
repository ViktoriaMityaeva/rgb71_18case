import dataclasses
import datetime
import jwt
from typing import TYPE_CHECKING
from django.conf import settings
from users import models
from django.shortcuts import get_object_or_404
from rest_framework import exceptions

if TYPE_CHECKING:
    from users.models import User


@dataclasses.dataclass
class UserDataClass:
    first_name: str
    last_name: str
    email: str
    password: str = None
    role: str = "user"
    photo: str = None
    id: int = None

    @classmethod
    def from_instance(cls, user: "User") -> "UserDataClass":
        return cls(
            first_name=user.first_name,
            last_name=user.last_name,
            email=user.email,
            role=user.role,
            photo=user.photo,
            id=user.id,
        )


def create_user(user_dc: "UserDataClass") -> "UserDataClass":
    instance = models.User(
        first_name=user_dc.first_name,
        last_name=user_dc.last_name,
        email=user_dc.email,
        role=user_dc.role,
        photo=user_dc.photo
    )
    if user_dc.password is not None:
        instance.set_password(user_dc.password)

    instance.save()

    return UserDataClass.from_instance(instance)


def user_email_selector(email: str) -> "User":
    user = models.User.objects.filter(email=email).first()
    return user


def create_token(user_id: int) -> str:
    """
    Creates a JWT token for a given user ID.

    :param user_id: An integer representing the ID of the user.
    :type user_id: int
    :return: A string representing the JWT token.
    :rtype: str
    """
    payload = dict(
        id=user_id,
        exp=datetime.datetime.utcnow() + datetime.timedelta(hours=24),
        iat=datetime.datetime.utcnow(),
    )
    token = jwt.encode(payload, settings.JWT_SECRET, algorithm="HS256")
    return token


def update_user_status(user: "User", user_mail: int, user_data: "UserDataClass"):
    user_in_json = get_object_or_404(User, pk=user_mail)

    if user.is_superuser or user.role =='admin' or user.id != user_in_json.user.id:
        raise exceptions.PermissionDenied("You're not the user fool")

    status.content = status_data.content
    status.save()

    return StatusDataClass.from_instance(status_model=status)