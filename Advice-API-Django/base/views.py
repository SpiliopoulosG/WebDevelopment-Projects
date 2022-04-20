from django.shortcuts import render
import requests

# Create your views here.
def main(request):
    api_response = requests.get('https://api.adviceslip.com/advice')
    api_response = api_response.json()
    advice = api_response['slip']
    context = { 'advice' : advice }
    return render(request, 'main.html', context)