from django.contrib import admin
from django.urls import include, path
from notes import views
from rest_framework import routers
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView)

router = routers.DefaultRouter()
router.register(r"notes", views.NoteViewSet, basename="note")

urlpatterns = [
    path("", include(router.urls)),
    path("admin/", admin.site.urls),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
