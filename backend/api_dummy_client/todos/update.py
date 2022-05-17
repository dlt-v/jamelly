import requests

endpoint = "http://127.0.0.1:8000/todos/1/update/"

data = {
    'status': 'FINISHED'
}

get_response = requests.put(endpoint, json=data)

print(get_response.json())
print(get_response.status_code)
