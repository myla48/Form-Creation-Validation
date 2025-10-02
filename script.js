document.addEventListener("DOMContentLoaded", function () {
  // All your code goes here
});
const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent actual form submission
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let isValid = true;
  const messages = [];

  if (username.length < 3) {
    isValid = false;
    messages.push("Username must be at least 3 characters long.");
  }

  if (!email.includes("@") || !email.includes(".")) {
    isValid = false;
    messages.push("Email must include '@' and '.'");
  }

  if (password.length < 8) {
    isValid = false;
    messages.push("Password must be at least 8 characters long.");
  }

  feedbackDiv.style.display = "block";

  if (isValid) {
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745"; // green
  } else {
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545"; // red
  }
});
