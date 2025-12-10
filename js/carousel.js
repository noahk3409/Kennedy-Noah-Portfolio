const carousels = document.querySelectorAll('.carousel');

carousels.forEach(function (carousel) {
  
  const track = carousel.querySelector('.carousel-track');
  const prev = carousel.querySelector('.prev-btn');
  const next = carousel.querySelector('.next-btn');

  function moveLeft() {
    track.style.transform = 'translateX(-100%)';
    track.addEventListener('transitionend', handleLeft);
  }

  function handleLeft() {
    track.removeEventListener('transitionend', handleLeft);
    track.appendChild(track.firstElementChild);
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';
    track.offsetHeight;
    track.style.transition = 'transform 0.5s ease';
  }

  function moveRight() {
    track.insertBefore(track.lastElementChild, track.firstElementChild);
    track.style.transition = 'none';
    track.style.transform = 'translateX(-100%)';
    track.offsetHeight;
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = 'translateX(0)';
  }

  prev.addEventListener('click', function (e) {
    e.preventDefault();
    moveRight();
  });

  next.addEventListener('click', function (e) {
    e.preventDefault();
    moveLeft();
  });

});
