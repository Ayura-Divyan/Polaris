//Animation for button press
const button = document.getElementsByClassName('journey')[0];

button.addEventListener('click', () => {
  button.classList.add('pressed');
  setTimeout(() => {
    button.classList.remove('pressed');
  }, 200); 
});