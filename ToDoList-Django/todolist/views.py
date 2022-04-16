from django.shortcuts import render

# Create your views here.
from urllib.error import URLError
from django.shortcuts import render, redirect
import uuid
from .models import Todo 
from django.http import HttpResponse

# Create your views here.
def index(request):

    todo = Todo.objects.all()
    context = {'todos': todo}
    if request.method == "POST":
        new_todo = Todo(
            title = request.POST['title']
        )
        new_todo.save()
        return redirect('/')

    return render(request, 'index.html', context)

def delete(request, pk):
    todo = Todo.objects.get(id=pk)
    todo.delete()
    return redirect('/')


