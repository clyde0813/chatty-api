import time

from apscheduler.schedulers.background import BackgroundScheduler

from config.settings import base


def print_1():
    print(time.ctime())


def start():
    scheduler = BackgroundScheduler(timezone=base.TIME_ZONE)
    scheduler.add_job(
        print_1,
        trigger='cron',
        second='10',
        minute='*',
        hour='*'
    )
    scheduler.start()
