  // Fetch the video data
fetch('../data/videos.json')
.then(response => response.json())
.then(videos => {
  const gallery = document.getElementById('gallery');

  // Generate video cards
  videos.forEach(video => {
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

