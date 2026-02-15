//Animation for button press
const button = document.getElementsByClassName('journey')[0];

button.addEventListener('click', () => {
  button.classList.add('pressed');
  setTimeout(() => {
    button.classList.remove('pressed');
  }, 200); 
});

// Scroll-based class toggles (animation of elements when they enter the viewpoint)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.1 
});

const scrollAnimation = document.getElementById('header');
scrollAnimation.classList.add('hidden');
observer.observe(scrollAnimation);
