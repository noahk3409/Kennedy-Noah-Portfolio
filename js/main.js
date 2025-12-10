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