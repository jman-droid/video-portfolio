// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Fetch the video data
fetch('../data/videos.json')
  .then(response => response.json())
  .then(videos => {
    const gallery = document.getElementById('gallery');

    // Shuffle the videos
    const shuffledVideos = shuffleArray(videos);

    // Generate video cards
    shuffledVideos.forEach(video => {
      const videoCard = document.createElement('div');
      videoCard.classList.add('video-card');
      videoCard.innerHTML = `
        <a href="pages/video.html?id=${video.id}">
          <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
        </a>
        <div class="video-title">${video.title}</div>
      `;
      gallery.appendChild(videoCard);
    });
  })
  .catch(error => console.error('Error loading videos:', error));
