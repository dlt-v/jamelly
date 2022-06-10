from django.db import models

STATUS_CHOICES = [
    ('ACT', 'Active'),
    ('CAN', 'Cancelled'),
    ('FIN', 'Finished')
]


class Todo(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=80, blank=False, )
    owner_id = models.ForeignKey(
        'auth.User',
        related_name='todos',
        on_delete=models.CASCADE
    )
    content = models.CharField(max_length=300, blank=True, default='')
    status = models.CharField(max_length=3, choices=STATUS_CHOICES)

    class Meta:
        ordering = ['created_at']
