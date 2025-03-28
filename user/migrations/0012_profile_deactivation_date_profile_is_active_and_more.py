# Generated by Django 4.2.2 on 2023-06-19 20:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0011_remove_profile_follower_remove_profile_following_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='deactivation_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.CreateModel(
            name='BlockedProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('blocked_profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blocked_profile', to='user.profile')),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blocking_profile', to='user.profile')),
            ],
            options={
                'unique_together': {('profile', 'blocked_profile')},
            },
        ),
    ]
