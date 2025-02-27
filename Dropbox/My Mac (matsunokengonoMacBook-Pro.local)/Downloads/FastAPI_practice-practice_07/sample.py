import requests
import json

def main():
    url = 'http://127.0.0.1:8000'
    data = {
        'x': 3,
        'y': 4
    }
    r = requests.post(url, json.dumps(data))
    print(r.json())

if __name__ == '__main__':
    main()