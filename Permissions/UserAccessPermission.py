from rest_framework import permissions
import logging

from Exceptions.UnauthorizedExceptions import UnauthorizedError

from config.ip_address_gatherer import get_client_ip

logger = logging.getLogger('chatty')


class IsAuthenticated(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user and request.user.is_authenticated:
            return True
        logger.error('IsAuthenticated view : ' + str(view) + ' IP : ' + str(get_client_ip(request)))
        raise UnauthorizedError()


class IsQuestionTarget(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if obj.target_profile == request.user.profile:
            return True
        logger.error('IsQuestionTarget view : ' + str(view) + ' IP : ' + str(get_client_ip(request)))
        raise UnauthorizedError()
