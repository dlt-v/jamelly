import requests
from getpass import getpass


username = input('Username: ')
password = getpass()

auth_endpoint = "http://127.0.0.1:8000/auth/"
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
    id = int(input("Product ID to delete: "))
    endpoint = f"http://127.0.0.1:8000/todos/{id}/delete"

    get_response = requests.delete(endpoint, headers=headers)

    print(get_response.status_code)
