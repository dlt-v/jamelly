from enum import Enum
from django.db import models

# Create your models here.


class Todo(models.Model):
    name = models.CharField(max_length=100)
    # list_id =
    created = models.DateTimeField(auto_now_add=True)

    class TodoStatus(models.TextChoices):
        ACTIVE = 'ACTIVE'
        FINISHED = 'FINISHED',
        CANCELED = 'CANCELED',

    status = models.CharField(
        max_length=10,
        choices=TodoStatus.choices,
        default=TodoStatus.ACTIVE
    )
