import datetime

from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.core.management.base import BaseCommand, CommandError
from django.utils import timezone
from notes.models import Note


class Command(BaseCommand):
    def handle(self, *args, **options):
        User.objects.create_superuser("admin", "admin@example.com", "admin")
        user = User.objects.create(username="test", password=make_password("testsalasana"))

        title = "Note title"
        content = "Here is some general text for a note. This is testing data."
        Note.objects.create(user=user, title=title, content=content)
        for i in range(2, 10):
            Note.objects.create(user=user, title=title, content=content * i)

        title = "Old note title, should not be displayed"
        content = "Old note content, should not be displayed"
        old_time = timezone.now() - datetime.timedelta(days=2)
        Note.objects.create(
            user=user, title=title, content=content, created_at=old_time
        )
