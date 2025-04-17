from flask import Flask, request, redirect
import requests
import logging
from os import system
from urllib.parse import urlparse

app = Flask(__name__)

# Config
KEY_FILE = open("key","r")
API_KEY = KEY_FILE.read()
KEY_FILE.close()

WARNING_PAGE_URL = "http://10.66.66.1/unsafe"  # change to your hosted warning page
SAFE_BROWSING_API = "https://safebrowsing.googleapis.com/v4/threatMatches:find?key=" + API_KEY

# Logging
logging.basicConfig(filename="unsafe_domains.log", level=logging.INFO)

def is_safe_url(url):
    domain = urlparse(url).netloc
    data = {
        "client": {"clientId": "your-proxy", "clientVersion": "1.0"},
        "threatInfo": {
            "threatTypes": ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION"],
            "platformTypes": ["ANY_PLATFORM"],
            "threatEntryTypes": ["URL"],
            "threatEntries": [{"url": url}]
        }
    }

    try:
        res = requests.post(SAFE_BROWSING_API, json=data)
        if res.json().get("matches"):
            logging.info(f"Blocked unsafe domain: {url}")
            return False
    except Exception as e:
        print("Error:", e)

    return True

def log_request_info():
    print(f"Incoming Request: {request.method} {request.url}")

@app.route("/", defaults={"path": ""})

@app.route("/<path:path>")
def proxy(path):
    full_url = request.url.replace("http://", "http://", 1)  # we only proxy HTTP
    if not is_safe_url(full_url):
        return redirect(WARNING_PAGE_URL)

    try:
        res = requests.get(full_url)
        return res.content
    except Exception as e:
        return f"Error contacting destination: {e}", 502

if __name__ == "__main__":
    system('./proxyfix.sh & ./start-containers.sh & ./web-interface.sh')
    app.run(host="0.0.0.0", port=8085)
