document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  if (!form) {
    console.error("Form with id 'registrationForm' not found.");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const role = document.getElementById("role").value;

    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^(?:07|01)\d{8}$|^254\d{9}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!nameRegex.test(name)) {
      alert("Name should contain only letters and spaces.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Phone number must start with 07, 01, or 254 and be correctly formatted.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert(`You, ${name}, have successfully registered as a ${role}.`);
    form.reset();
  });
});
