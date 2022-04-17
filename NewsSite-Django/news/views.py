from django.shortcuts import render

# Create your views here.


def home(request):
    selected = True
    context = { 'selected_home': selected}
    return render(request, 'news/home.html',context=context)

def destination(request):
    selected = True
    context = { 'selected_destination': selected}
    return render(request, 'news/destination.html',context=context)

def crew(request):
    selected = True
    context = { 'selected_crew': selected}
    return render(request, 'news/crew.html',context=context)

def technology(request):
    selected = True
    context = { 'selected_technology': selected}
    return render(request, 'news/technology.html',context=context)            