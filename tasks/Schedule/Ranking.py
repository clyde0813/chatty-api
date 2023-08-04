from celery import Celery
from celery.schedules import crontab

app = Celery()


@app.task()
def updateRankingDaily():
    print("123123")


app.conf.beat_schedule = {
    'add-daily': {
        'task': 'updateRankingDaily',
        'schedule': 10.0,
    },
}

app.conf.timezone = 'Asia/Seoul'
