# Generated by Django 4.1.2 on 2023-04-18 01:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_alter_profile_deactivated_status'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ForbiddenUsername',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='ban_until',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='deactivated_status',
        ),
        migrations.AddField(
            model_name='profile',
            name='profile_name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
