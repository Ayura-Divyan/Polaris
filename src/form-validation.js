document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactus");

  form.addEventListener("submit", (e) => {
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const number = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (firstName === "") {
      alert("Please enter your first name.");
      isValid = false;
    } else if (lastName === "") {
      alert("Please enter your last name.");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      isValid = false;
    } else if (message.length < 10) {
      alert("Your message must be at least 10 characters.");
      isValid = false;
    } else if (!phoneRegex.test(number)) {
      alert("Please enter a valid 10-digit phone number.");
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault();
    } else {
      const submitBtn = form.querySelector('input[type="submit"]');
      submitBtn.value = "Sending...";
      submitBtn.disabled = true;
    }
  });
});
