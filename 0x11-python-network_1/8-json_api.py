#!/usr/bin/python3
"""
a Python script that takes in a letter and sends a POST request to http://0.0.0.0:5000/search_user with the letter as a parameter.
"""
import requests
from sys import argv


if __name__ == "__main__":
    
    url = 'http://0.0.0.0:5000/search_user'
    ask = requests.get(url)
    if len(argv) == 2:
        ask = requests.post(url, data={'q': argv[1]})
    else:
        ask = requests.post(url, data={'q': ""})
    try:
        if ask.json() == {}:
            print("No result")
        else:
            print("[{}] {}".format(ask.json().get('id'), ask.json().get('name')))
    except:
        print("Not a valid JSON")
