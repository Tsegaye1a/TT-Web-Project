# Generated by Django 3.2.7 on 2022-01-10 00:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_product_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='image',
        ),
    ]
