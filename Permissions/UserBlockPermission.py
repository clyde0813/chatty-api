from django.db.models import Q
from rest_framework import permissions
import logging

from Exceptions.BaseExceptions import DataInaccuracyError
from user.models import BlockedProfile


class IsBlockedOneWay(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated is not True:
            return True

        # 차단한 유저의 정보 요청 필터링
        # 2023.06.25
        if request.method == 'GET':
            if BlockedProfile.objects.filter(profile__user__username=view.kwargs['username'],
                                             blocked_profile=request.user.profile).exists():
                raise DataInaccuracyError()
        else:
            if BlockedProfile.objects.filter(profile__user__username=request.data['username'],
                                             blocked_profile=request.user.profile).exists():
                raise DataInaccuracyError()

        return True


class IsBlockedTwoWay(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated is not True:
            return True

        # 차단한 유저의 정보 요청 필터링
        # 2023.06.25
        if request.method == 'GET':
            if BlockedProfile.objects.filter(
                    Q(profile__user__username=view.kwargs['username'],
                      blocked_profile=request.user.profile) |
                    Q(profile=request.user.profile,
                      blocked_profile__user__username=view.kwargs['username'])).exists():
                raise DataInaccuracyError()
        else:
            if BlockedProfile.objects.filter(
                    Q(profile__user__username=request.data['username'],
                      blocked_profile=request.user.profile) |
                    Q(profile=request.user.profile,
                      blocked_profile__user__username=request.data['username'])).exists():
                raise DataInaccuracyError()

        return True
