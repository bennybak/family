"""
URL configuration for ebdjango project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from playground import views
from .views import login_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),  # Index/Home page

    #API
    path('api/login/', login_view, name='login'),

    # Musician URLs
    path('musician/add/', views.add_musician, name='add_musician'),
    path('musician/update/<int:musician_id>/', views.update_musician, name='update_musician'),
    path('musician/delete/<int:musician_id>/', views.delete_musician, name='delete_musician'),
    path('musicians/', views.list_musicians, name='musician_list'),

    # Album URLs
    path('album/add/', views.add_album, name='add_album'),
    path('album/update/<int:album_id>/', views.update_album, name='update_album'),
    path('album/delete/<int:album_id>/', views.delete_album, name='delete_album'),
    path('albums/', views.list_albums, name='album_list'),
]
