// ----- Mobile Menu -----
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });
}

// ----- Scroll Fade-In Effect -----
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ----- Video Controls ----- //

// Selectors
  const video = document.querySelector("#player-container video");
  const playButton = document.querySelector("#play-button");
  const pauseButton = document.querySelector("#pause-button");
  const stopButton = document.querySelector("#stop-button");
  const volSlider = document.querySelector("#change-vol");
  const fullScreenButton = document.querySelector("#full-screen");

  // Named functions for each control
  function playVideo() {
    video.play();
  }

  function pauseVideo() {
    video.pause();
  }

  function stopVideo() {
    video.pause();
    video.currentTime = 0;
  }

  function changeVolume() {
    video.volume = volSlider.value;
  }

  function toggleFullScreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }

  // Event Listeners
  playButton.addEventListener("click", playVideo);
  pauseButton.addEventListener("click", pauseVideo);
  stopButton.addEventListener("click", stopVideo);
  volSlider.addEventListener("input", changeVolume);
  fullScreenButton.addEventListener("click", toggleFullScreen);
