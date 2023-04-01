#!/usr/bin/python3
"""
Please list 10 commits (from the most recent to oldest) of the repository “rails” by the user “rails”
You must use the GitHub API, here is the documentation https://developer.github.com/v3/repos/commits/
Print all commits by: `<sha>: <author name>` (one by line)
"""
import requests
from sys import argv

if __name__ == "__main__":
   
    repo = argv[1]
    owner = argv[2]
    url = 'https://api.github.com/repos/{}/{}/commits'.format(owner, repo)
    ask = requests.get(url)
    res_list = ask.json()
    try:
        for i in range(10):
            print("{}: {}".format(res_list[i].get('sha'), res_list[i].
                                  get('commit').get('author').get('name')))
    except:
        pass
