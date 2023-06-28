from itertools import chain

from user.models import BlockedProfile


def question_exclude(request, instance):
    blocked_list = BlockedProfile.objects.filter(profile=request.user.profile).values_list(
        'blocked_profile', flat=True)
    blocking_list = BlockedProfile.objects.filter(blocked_profile=request.user.profile).values_list(
        'profile', flat=True)
    blacklist = list(chain(blocked_list, blocking_list))
    instance = instance.exclude(anonymous_status=False, author_profile__in=blacklist)
    return instance


def user_exclude(request, instance):
    blocking_list = BlockedProfile.objects.filter(profile=request.user.profile).all().values_list(
        'blocked_profile__profile_name')
    blocked_list = BlockedProfile.objects.filter(blocked_profile=request.user.profile).all().values_list(
        'profile__profile_name')
    blacklist = list(chain(blocked_list, blocking_list))
    instance = instance.exclude(profile_name__in=blacklist)
    return instance


def follow_exclude(request, instance, type):
    blocking_list = BlockedProfile.objects.filter(profile=request.user.profile).values_list(
        'blocked_profile', flat=True)
    blocked_list = BlockedProfile.objects.filter(blocked_profile=request.user.profile).values_list(
        'profile', flat=True)
    blacklist = list(chain(blocked_list, blocking_list))
    if type == "following":
        instance = instance.exclude(following__in=blacklist)
    elif type == "follower":
        instance = instance.exclude(follower__in=blacklist)
    return instance
