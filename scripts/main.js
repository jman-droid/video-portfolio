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
      <a href="pages/video.html?id=${video.id}" class="video-link">
        <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
      </a>
      <h3><a href="pages/video.html?id=${video.id}" class="video-link">${video.title}</a></h3>
    `;
    gallery.appendChild(videoCard);
  });
})
.catch(error => console.error('Error loading videos:', error));

