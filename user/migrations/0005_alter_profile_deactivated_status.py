# Generated by Django 4.1.2 on 2023-04-18 01:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_apnsdevice_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='deactivated_status',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
