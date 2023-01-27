from django.contrib.auth import REDIRECT_FIELD_NAME
from django.contrib.auth.decorators import user_passes_test
from .models import CustomUser

def for_students(function=None,redirect_field_name=REDIRECT_FIELD_NAME,login_url='login'):
    '''
        A decorator to check logged in user could be a student
    '''
    actual_decorator = user_passes_test(
        lambda u: u.user_type == 'student' and u.is_active,
        login_url=login_url,
        redirect_field_name=redirect_field_name
    )
    if function:
        return actual_decorator(function)
    return actual_decorator

def for_cordinator(function=None,redirect_field_name=REDIRECT_FIELD_NAME,login_url='login'):
    '''
        A decorator to check logged in user could be a cordinator
    '''
    actual_decorator = user_passes_test(
        lambda u: u.user_type == 'cordinator' and u.is_active,
        login_url=login_url,
        redirect_field_name=redirect_field_name
    )
    if function:
        return actual_decorator(function)
    return actual_decorator

def for_recruiter(function=None,redirect_field_name=REDIRECT_FIELD_NAME,login_url='login'):
    '''
        A decorator to check logged in user could be a recruiter
    '''
    actual_decorator = user_passes_test(
        lambda u: u.user_type == 'recruiter' and u.is_active,
        login_url=login_url,
        redirect_field_name=redirect_field_name
    )
    if function:
        return actual_decorator(function)
    return actual_decorator

def for_administrator(function=None,redirect_field_name=REDIRECT_FIELD_NAME,login_url='login'):
    '''
        A decorator to check logged in user could be a administrator
    '''
    actual_decorator = user_passes_test(
        lambda u: u.user_type == 'administrator' and u.is_active,
        login_url=login_url,
        redirect_field_name=redirect_field_name
    )
    if function:
        return actual_decorator(function)
    return actual_decorator