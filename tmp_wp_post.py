import requests
import base64
import json

url = "https://live-sonakhi-rumi.pantheonsite.io/wp-json/wp/v2/posts"
user = "sonakhirumi"
password = "Benguli@73"

# Base64 Encode Auth
credentials = f"{user}:{password}"
token = base64.b64encode(credentials.encode()).decode()

headers = {
    'Authorization': f'Basic {token}',
    'Content-Type': 'application/json'
}

# 1. Create Post
post_data = {
    "title": "Musing",
    "content": "I am crippled by love. The love that I will never experience. The absence of its gentle embrace, subtle gaze, and empowering title. To be swoon away with their hands in mine is an honour i am not worthy of. I look at love from a distance that saves it from my need and filth. I wish love attainment, I wish love prosperity. And on some weak days i wish love selfishly for me.",
    "status": "publish",
    "categories": [3] # Fallback to existing 'english' for now
}

response = requests.post(url, headers=headers, json=post_data)

if response.status_code == 201:
    print("SUCCESS: Post created!")
    print(response.json())
else:
    print(f"FAILED: {response.status_code}")
    print(response.text)
