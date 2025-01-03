// Get video ID from URL
const params = new URLSearchParams(window.location.search);
const videoId = params.get('id');

// Fetch video data
fetch('../data/videos.json') // Adjust the path as per your file structure
  .then(response => response.json())
  .then(videos => {
    const video = videos.find(v => v.id === videoId);
    const videoContainer = document.getElementById('video-container');

    if (video) {
      videoContainer.innerHTML = `
        <h1>${video.title}</h1>
        <iframe src="${video.embedUrl}" frameborder="0" allowfullscreen></iframe>
        <p>${video.description}</p>
        
      `;
    } else {
      videoContainer.innerHTML = `<p>Video not found.</p>`;
    }
  })
  .catch(error => console.error('Error loading video:', error));
