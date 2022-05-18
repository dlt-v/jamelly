from getpass import getpass
import requests

username = input('Username: ')
password = getpass()
auth_endpoint = "http://127.0.0.1:8000/auth/"
endpoint = "http://127.0.0.1:8000/todos/"
user_data = {
    'username': username,
    'password': password
}
token_response = requests.post(auth_endpoint, json=user_data)

if token_response.status_code == 200:
    token = token_response.json()['token']
    headers = {
        'Authorization': f'Token {token}'
    }

    data = {
        "name": "Do the dishes."
    }

    get_response = requests.post(endpoint, json=data, headers=headers)

    print(get_response.json())
    print(get_response.status_code)
