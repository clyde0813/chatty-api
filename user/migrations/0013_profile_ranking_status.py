# Generated by Django 4.2.2 on 2023-07-29 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0012_profile_deactivation_date_profile_is_active_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='ranking_status',
            field=models.BooleanField(default=False),
        ),
    ]
