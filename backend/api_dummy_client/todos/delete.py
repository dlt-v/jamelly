import requests
id = int(input("Product ID to delete: "))
endpoint = f"http://127.0.0.1:8000/todos/{id}/delete"


get_response = requests.delete(endpoint)

print(get_response.status_code)
