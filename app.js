const progress = document.querySelector(".progress-bar");
const timeline = document.querySelector(".timeline-progress");
const volume = document.querySelector(".volume-level");

const setWidths = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  progress.style.width = `${40 + (seconds % 20) * 2}%`;
  timeline.style.width = `${30 + (seconds % 30)}%`;
  volume.style.width = `${50 + (seconds % 25)}%`;
};

setWidths();
setInterval(setWidths, 5000);
