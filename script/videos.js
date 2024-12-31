[
    {
      "id": "video1",
      "title": "Demo Reel",
      "description": "A reel of some recent work",
      "platform": "YouTube",
      "embedUrl": "https://youtu.be/UC1SNRZHbbw"
    },
    {
      "id": "video2",
      "title": "Welcome to Tutta Bella",
      "description": "I edited this Welcome video for Tutta Bella's new incoming staff. Director and DP - Brad Curran",
      "platform": "Vimeo",
      "embedUrl": "https://vimeo.com/935290369"
    }
]

// Get video ID from URL
const params = new URLSearchParams(window.location.search);
const videoId = params.get('id');

// Fetch video data
fetch('videos.json')
  .then(response => response.json())
  .then(videos => {
    const video = videos.find(v => v.id === videoId);
    const videoContainer = document.getElementById('video-container');

    if (video) {
      videoContainer.innerHTML = `
        <h1>${video.title}</h1>
        <iframe src="${video.embedUrl}" frameborder="0" allowfullscreen></iframe>
        <p>${video.description}</p>
        <a href="index.html">Back to Gallery</a>
      `;
    } else {
      videoContainer.innerHTML = `<p>Video not found.</p>`;
    }
  })
  .catch(error => console.error('Error loading video:', error));