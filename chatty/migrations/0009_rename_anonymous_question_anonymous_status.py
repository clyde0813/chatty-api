# Generated by Django 4.2.2 on 2023-06-17 07:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chatty', '0008_question_anonymous'),
    ]

    operations = [
        migrations.RenameField(
            model_name='question',
            old_name='anonymous',
            new_name='anonymous_status',
        ),
    ]
