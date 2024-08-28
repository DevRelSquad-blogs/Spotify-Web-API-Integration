import requests
import base64

def get_token(client_id, client_secret):
    auth_str = f"{client_id}:{client_secret}"
    b64_auth_str = base64.b64encode(auth_str.encode()).decode()

    headers = {
        "Authorization": f"Basic {b64_auth_str}"
    }
    data = {
        "grant_type": "client_credentials"
    }

    response = requests.post("https://accounts.spotify.com/api/token", headers=headers, data=data)
    response_data = response.json()
    return response_data["access_token"]

def get_track(track_id, access_token):
    headers = {
        "Authorization": f"Bearer {access_token}"
    }
    response = requests.get(f"https://api.spotify.com/v1/tracks/{track_id}", headers=headers)
    return response.json()

if __name__ == "__main__":
    # Replace with your Spotify credentials
    client_id = "your_client_id"
    client_secret = "your_client_secret"

    # Get OAuth token
    access_token = get_token(client_id, client_secret)
    print(f"Access Token: {access_token}")

    # Fetch track information
    track_id = "3n3Ppam7vgaVa1iaRUc9Lp"  # Example track ID
    track_data = get_track(track_id, access_token)
    print(track_data)
