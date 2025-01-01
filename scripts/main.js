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
        <img src="${video.thumbnail}" alt="${video.title} Thumbnail">
        <h3>${video.title}</h3>
        <a href="pages/video.html?id=${video.id}">Watch Video</a>
      `;
      gallery.appendChild(videoCard);
    });
  })
  .catch(error => console.error('Error loading videos:', error));
