from rest_framework_simplejwt.views import TokenRefreshView

from django.urls import path

from API.views import *

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("token/", MyTokenObtainPairView.as_view()),
    path("token/refresh/", TokenRefreshView.as_view()),
    path("register/", RegisterView.as_view()),
    path("profile/<int:pk>/", ProfileUpdateView.as_view(), name='profile'),
    path("my-messages/<user_id>/", MyInbox.as_view(), name='my-messages'),
    path("get-messages/<sender_id>/<receiver_id>/", GetMessages.as_view(), name="get-messages"),
    path("send-message/", SendMessage.as_view(), name='send-message'),
    path("search/<searched_user>/", SearchUser.as_view(), name="search-users"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
