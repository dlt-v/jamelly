import requests

endpoint = "http://127.0.0.1:8000/todos/"

data = {
    "title": "This field is filled now."
}

get_response = requests.post(endpoint, json=data)

print(get_response.json())
print(get_response.status_code)