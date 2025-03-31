from django.contrib import admin
from notes.models import Note


class NoteAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "user__username",
        "title",
        "content",
    )


admin.site.register(Note, NoteAdmin)
