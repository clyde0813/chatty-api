from .base import *
import pymysql

DEBUG = False

ALLOWED_HOSTS = ['chatty.kr']

pymysql.install_as_MySQLdb()


