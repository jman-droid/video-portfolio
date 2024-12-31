// Fetch the video data
fetch('videos.json')
  .then(response => response.json())
  .then(videos => {
    const gallery = document.getElementById('gallery');

    // Generate video cards
    videos.forEach(video => {
      const videoCard = document.createElement('div');
      videoCard.classList.add('video-card');
      videoCard.innerHTML = `
        <h3>${video.title}</h3>
        <p>${video.description}</p>
        <a href="video.html?id=${video.id}">Watch Video</a>
      `;
      gallery.appendChild(videoCard);
    });
  })
  .catch(error => console.error('Error loading videos:', error));
