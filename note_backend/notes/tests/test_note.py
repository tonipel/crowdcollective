import json

from django.contrib.auth.models import User
from django.urls import reverse
from notes.models import Note
from rest_framework.test import APITestCase


class TestNoteAPIView(APITestCase):
    def setUp(self):
        self.url = reverse("note-list")
        title = "testtitle"
        content = "testcontent"
        user = User.objects.create(username="testuser")

        self.note = Note.objects.create(user=user, title=title, content=content)

        self.client.force_authenticate(user=user)

    def test_get(self):
        response = self.client.get(self.url)

        self.assertEqual(200, response.status_code)

        content = json.loads(response.content)[0]["content"]

        self.assertEqual(self.note.content, content)
