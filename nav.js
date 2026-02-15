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