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
gsap.registerPlugin(ScrollTrigger);

const fadeItems = document.querySelectorAll(".fade-in");

function fadeInOnScroll(item) {
  gsap.to(item, {
    opacity: 1,
    y: 30,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      once: true 
    }
  });
}

fadeItems.forEach(fadeInOnScroll);

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
