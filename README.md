
# Spotify Web API Integration

This repository contains examples of using the Spotify Web API in both Python and JavaScript to interact with Spotify's music catalog. You will learn how to authenticate using OAuth and fetch track data to integrate Spotify's features into your applications.

## Overview

By integrating the Spotify Web API into your applications, you can:
- Access rich music data, including songs, albums, artists, and playlists.
- Manage user playlists.
- Enhance user experience with personalized music recommendations.
  
This repository provides examples to get you started quickly in both Python and JavaScript.

## Prerequisites

- A [Spotify Developer Account](https://developer.spotify.com/dashboard/)
- Python 3.x (for the Python example)
- Node.js (for the JavaScript example)

## Setup

### Clone the Repository

```bash
git clone https://github.com/yourusername/Spotify-Web-API-Integration.git
cd Spotify-Web-API-Integration
```

### Python Setup

1. Navigate to the `Python/` directory:
    ```bash
    cd Python
    ```
2. Install the required dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Update `app.py` with your Spotify Client ID and Secret:
    ```python
    client_id = "your_client_id"
    client_secret = "your_client_secret"
    ```
4. Run the Python script:
    ```bash
    python app.py
    ```

### JavaScript Setup

1. Navigate to the `JavaScript/` directory and open `index.html` in your web browser.
2. Edit `app.js` to add your Spotify Client ID and Secret:
    ```javascript
    const client_id = 'your_client_id';
    const client_secret = 'your_client_secret';
    ```
3. Click the button in the HTML file to fetch and display track data.

## Examples

### Python Example

The Python script (`app.py`) uses the Spotify Web API to:
- Authenticate using the OAuth client credentials flow.
- Fetch track data for a specific track ID.

#### Sample Output

```json
{
  "name": "Track Name",
  "album": {
    "name": "Album Name"
  },
  "artists": [
    {
      "name": "Artist Name"
    }
  ],
  "duration_ms": 210000
}
```

### JavaScript Example

The JavaScript code (`app.js`) demonstrates:
- Obtaining an OAuth token in a web app.
- Fetching and displaying track data in the browser.

#### Sample Output

The fetched data is displayed directly on the web page when the "Fetch Track Data" button is clicked.

## Error Handling

Both examples handle errors that may occur during API requests, such as authentication failures, rate limits, or network issues. Proper error messages are displayed to help debug and resolve issues.

## Resources

- [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/)
- [Getting Started with Spotify Web API](https://developer.spotify.com/documentation/web-api/quick-start/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
