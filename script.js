
const videos = [
  { title: "Menufy", views: "515K views", time: "4 months ago", duration: "1:37:19", thumbnail: "https://ideogram.ai/assets/progressive-image/balanced/response/tf-YyK4qTpqmILvHInIrZQ", videoUrl: "" },
  { title: "Breaking News: BJP में बड़ी टूट !", views: "97K views", time: "1 hour ago", duration: "32:14", thumbnail: "https://ideogram.ai/assets/progressive-image/balanced/response/9WPUAV1vRziAsFCRwta0Vw", videoUrl: "link_to_video_2" },
  { title: "Bjp Vs IndiaAlliance", views: "2.7K watching", time: "", duration: "LIVE", thumbnail: "https://ideogram.ai/assets/progressive-image/balanced/response/uIAoVJI0QGW_8nqUcWMcZw", videoUrl: "link_to_video_3" },
  { title: "Roast by harsh Gurjal to Bassi", views: "101K views", time: "9 months ago", duration: "9:28:50", thumbnail: "https://ideogram.ai/assets/progressive-image/balanced/response/QGth9a8sS3GPR_I7y46Irw", videoUrl: "link_to_video_4" },
  { title: "My Mix", views: "Kalpana Patowary, Pawan Singh, Suresh Raja, and more", time: "", duration: "Mix", thumbnail: "https://ideogram.ai/assets/progressive-image/balanced/response/JfZv2Yw4ROiRqS34aLlovQ", videoUrl: "link_to_video_5" },
  { title: "Menufy", views: "Kalpana Patowary, Pawan Singh, Suresh Raja, and more", time: "", duration: "Mix", thumbnail: "https://ideogram.ai/assets/progressive-image/balanced/response/TdoGz8Q_SZ-CqiKB2p0d5A", videoUrl: "link_to_video_6" },
  { title: "Silent Speak", views: "Kalpana Patowary, Pawan Singh, Suresh Raja, and more", time: "", duration: "Mix", thumbnail: "https://ideogram.ai/assets/progressive-image/balanced/response/sLcTaiOhQqW3dvm7HDZ8fA", videoUrl: "link_to_video_7" },
  { title: "Harsh vs Bassi", views: "Kalpana Patowary, Pawan Singh, Suresh Raja, and more", time: "", duration: "Mix", thumbnail: "https://ideogram.ai/assets/progressive-image/balanced/response/MHRubwvCSMKvqXVr-ZuMgQ", videoUrl: "link_to_video_8" }
];

function renderVideos() {
  const videoContainer = document.getElementById('videoContainer');
  videoContainer.innerHTML = '';
  videos.forEach((video, index) => {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';
    videoItem.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}">
      <h2>${video.title}</h2>
      <p>${video.views} | ${video.time}</p>
      <span>${video.duration}</span>
      <button class="play-button" onclick="openModal('${video.videoUrl}')">&#9658;</button>
    `;
    videoContainer.appendChild(videoItem);
  });
}

function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  const modeToggle = document.querySelector('.mode-toggle');
  if (body.classList.contains('dark-mode')) {
    modeToggle.textContent = 'Dark Mode';
  } else {
    modeToggle.textContent = 'Light Mode';
  }
}

function searchVideos() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchInput)
  );
  renderVideos(filteredVideos);
}

function openModal(videoUrl) {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  modal.style.display = 'flex';
  modalVideo.src = videoUrl;
  modalVideo.play();
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  modal.style.display = 'none';
  modalVideo.pause();
  modalVideo.src = '';
}

window.onclick = function(event) {
  const modal = document.getElementById('videoModal');
  if (event.target == modal) {
    closeModal();
  }
}

renderVideos();
