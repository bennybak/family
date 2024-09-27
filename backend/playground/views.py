from django.shortcuts import render

from django.shortcuts import render, get_object_or_404, redirect
from .models import Musician, Album
from .forms import MusicianForm, AlbumForm

def index(request):
    return render(request, 'index.html')

# Musician Views
def add_musician(request):
    if request.method == 'POST':
        form = MusicianForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('musician_list')
    else:
        form = MusicianForm()
    return render(request, 'add_musician.html', {'form': form})

def update_musician(request, musician_id):
    musician = get_object_or_404(Musician, id=musician_id)
    if request.method == 'POST':
        form = MusicianForm(request.POST, instance=musician)
        if form.is_valid():
            form.save()
            return redirect('musician_list')
    else:
        form = MusicianForm(instance=musician)
    return render(request, 'update_musician.html', {'form': form})

def delete_musician(request, musician_id):
    musician = get_object_or_404(Musician, id=musician_id)
    if request.method == 'POST':
        musician.delete()
        return redirect('musician_list')
    return render(request, 'delete_musician.html', {'musician': musician})

# View to list all musicians
def list_musicians(request):
    musicians = Musician.objects.all()
    return render(request, 'list_musicians.html', {'musicians': musicians})

# View to list all albums
def list_albums(request):
    albums = Album.objects.all()
    return render(request, 'list_albums.html', {'albums': albums})

# Album Views
def add_album(request):
    if request.method == 'POST':
        form = AlbumForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('album_list')
    else:
        form = AlbumForm()
    return render(request, 'add_album.html', {'form': form})

def update_album(request, album_id):
    album = get_object_or_404(Album, id=album_id)
    if request.method == 'POST':
        form = AlbumForm(request.POST, instance=album)
        if form.is_valid():
            form.save()
            return redirect('album_list')
    else:
        form = AlbumForm(instance=album)
    return render(request, 'update_album.html', {'form': form})

def delete_album(request, album_id):
    album = get_object_or_404(Album, id=album_id)
    if request.method == 'POST':
        album.delete()
        return redirect('album_list')
    return render(request, 'delete_album.html', {'album': album})
