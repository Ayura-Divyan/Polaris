document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactus");
  const alertOverlay = document.getElementById("custom-alert-overlay");
  const alertMsg = document.getElementById("alert-message");
  const closeBtn = document.getElementById("close-alert-btn");

  // Function to Show Alert
  function showAlert(title, message) {
    document.getElementById("alert-title").innerText = title; // Targets the <h3>
    document.getElementById("alert-message").innerText = message; // Targets the <p>
    alertOverlay.classList.add("active");

    // Trigger the shake animation
    const box = alertOverlay.querySelector(".alert-box");
    box.classList.add("apply-shake");

    // Remove shake class after it finishes so it can re-trigger later
    setTimeout(() => box.classList.remove("apply-shake"), 400);
  }

  // Function to Close Alert
  function closeAlert() {
    alertOverlay.classList.remove("active");
  }

  closeBtn.addEventListener("click", closeAlert);

  // Form Validation Logic
  form.addEventListener("submit", (e) => {
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const number = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    // Check conditions one by one
    if (firstName === "") {
      e.preventDefault();
      showAlert("Please enter your first name.");
    } else if (lastName === "") {
      e.preventDefault();
      showAlert("Please enter your last name.");
    } else if (!emailRegex.test(email)) {
      e.preventDefault();
      showAlert("Please enter a valid email address.");
    } else if (message.length < 10) {
      e.preventDefault();
      showAlert("Your message must be at least 10 characters.");
    } else if (!phoneRegex.test(number)) {
      showAlert("Please enter a valid 10-digit phone number.");
      isValid = false;
    } else {
      // Success State
      const submitBtn = form.querySelector('input[type="submit"]');
      submitBtn.value = "Sending...";
      submitBtn.disabled = true;
    }
  });
});
