//Animation for button press
const button = document.getElementsByClassName('journey')[0];

button.addEventListener('click', () => {
  button.classList.add('pressed');
  setTimeout(() => {
    button.classList.remove('pressed');
  }, 200); 
});

// Scroll-based class toggles 
// (animation of header when it enters the viewpoint)

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  const headerElements = document.querySelectorAll('.header');
  headerElements.forEach((el) => observer.observe(el));
});

// Scroll-based class toggles 
// (animation of featurelist when it enters the viewpoint)

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  const featureListElements = document.querySelectorAll('.featureList');
  featureListElements.forEach((el) => observer.observe(el));
});

// Scroll-based class toggles 
// (animation of whyPolaris when it enters the viewpoint)

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  const whyPolarisElements = document.querySelectorAll('.whyPolaris');
  whyPolarisElements.forEach((el) => observer.observe(el));
});

