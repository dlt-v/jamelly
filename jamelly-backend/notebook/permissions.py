from rest_framework import permissions


class IsOwner(permissions.BasePermission):
    '''
    Permission for checking if the user is owner of current notebook.
    '''

    def has_object_permission(self, request, view, obj):
        return obj.owner_id == request.user.id
