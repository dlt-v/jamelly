from django.db import models


class Notebook(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=50, blank=True, default='')
    owner_id = models.ForeignKey(
        'auth.User',
        related_name='notebooks',
        on_delete=models.CASCADE
    )

    class Meta:
        ordering = ['name']


class NoteSnippet(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=1000, blank=False)
    notebook_id = models.ForeignKey(
        Notebook,
        related_name='note_snippets',
        on_delete=models.CASCADE
    )

    class Meta:
        ordering = ['created_at']
