from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from .managers import UserManager
# Create your models here.

USER_CHOICE = (
    ('visitor','visitor'),
    ('student','student'),
    ('cordinator','cordinator'),
    ('recruiter','recruiter'),
    ('administrator','administrator')
)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    
    username = models.CharField(_("username"), max_length=150, blank=True)
    name = models.CharField(_("name"), max_length=250,blank=True)
    email = models.EmailField(
        _("email address"), 
        max_length=254,
        unique = True,
        error_messages = {
            "unique" : _("A user with that email address already exists.")
        },
    )
    is_staff = models.BooleanField(
        _("staff status"),
        default = False,
        help_text = _("Designates whether the user can log into this admin site."),
    )
    is_active = models.BooleanField(
        _("active"),
        default = True,
        help_text=_(
            "Designates whether this user should be treated as active. Unselect this instead of deleting accounts."
        ),
    )
    date_joined = models.DateTimeField(_("date joined"), default=timezone.now)
    user_type = models.CharField(max_length=50,choices=USER_CHOICE,blank=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    EMAIL_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")

    def get_short_name(self):
        """Return the short name for the user."""
        return self.name