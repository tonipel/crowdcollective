import datetime

from django.shortcuts import render
from django.utils import timezone
from notes.models import Note
from notes.serializers import NoteSerializer
from rest_framework import permissions, viewsets


class NoteViewSet(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        day_before = timezone.now() - datetime.timedelta(days=1)
        queryset = Note.objects.filter(user=user, created_at__gte=day_before)
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
