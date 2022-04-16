from sys import api_version
from django.shortcuts import render
from django.http import HttpResponse
import requests

# Create your views here.
def index(request):
    return render(request, 'index.html')
    
def word(request):
    search = request.GET.get('search')
    api_response = requests.get(f'https://api.dictionaryapi.dev/api/v2/entries/en/{search}')
    api_response = api_response.json()
    try:
        word = api_response[0]['word']
        definition = api_response[0]['meanings'][0]['definitions'][0]['definition']  
        
        context = {
            'word': word,
            'definition': definition
        }

        return render(request, 'word.html', context) 
    except:

        context = {
            'word': 'No Word Found',
            'definition': 'Sorry try Again'
        }

        return render(request, 'word.html', context)      