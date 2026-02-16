document.querySelector("#started").addEventListener("click", function(e) {
  e.preventDefault();

  document.querySelector("#journey_button").scrollIntoView({
    behavior: "smooth"
  });

  // Remove hash from URL
  history.pushState("", document.title, window.location.pathname);
});

document.querySelector("#learn").addEventListener("click", function(e) {
  e.preventDefault();

  document.querySelector("#learn_more").scrollIntoView({
    behavior: "smooth"
  });

  // Remove hash from URL
  history.pushState("", document.title, window.location.pathname);
});

const navbar = document.querySelector(".main-navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
});