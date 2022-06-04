from django.db import models

# Create your models here.


class Notebook(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=50, blank=True, default='')
    # owner_id =

    class Meta:
        ordering = ['name']


class NoteSnippet(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=1000, blank=False)
    # notebook_id

    class Meta:
        ordering = ['created_at']
