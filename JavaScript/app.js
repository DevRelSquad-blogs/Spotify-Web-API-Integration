async function getToken() {
    const client_id = 'your_client_id'; // Replace with your client ID
    const client_secret = 'your_client_secret'; // Replace with your client secret
    const url = 'https://accounts.spotify.com/api/token';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa(client_id + ':' + client_secret));

    const body = new URLSearchParams();
    body.append('grant_type', 'client_credentials');

    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
    });

    const data = await response.json();
    return data.access_token;
}

async function getTrack(track_id) {
    try {
        const token = await getToken();
        const url = `https://api.spotify.com/v1/tracks/${track_id}`;

        const response = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById('trackData').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}
