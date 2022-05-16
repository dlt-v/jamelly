import requests

endpoint = "http://127.0.0.1:8000/todos/"

data = {
    "name": "Do the dishes."
}

get_response = requests.post(endpoint, json=data)

print(get_response.json())
print(get_response.status_code)
