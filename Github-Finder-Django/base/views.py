from django.shortcuts import render
import requests

# Create your views here.
def home(request):

    try:
        search = request.GET.get('search')
        api_response = requests.get(f'https://api.github.com/users/{search}')
        api_response = api_response.json()
        response = api_response
        name = api_response['login']
        image = api_response['avatar_url']
        print(api_response)
        context = { 'response': response }
        return render(request, 'home.html', context)
    except: 
        context = {}   
        return render(request, 'home.html', context)