const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  // get values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  // error elements
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passError = document.getElementById("passError");
  let confirmError = document.getElementById("confirmError");

  // reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passError.textContent = "";
  confirmError.textContent = "";

  let isValid = true;

  // 1. Name validation
  if (name === "") {
    alert("Name cannot be empty");
    isValid = false;
  }

  // 2. Email validation
  if (!email.includes("@")) {
    alert("Email must contain @")
    isValid = false;
  }

  // 3. Password length
  if (password.length < 6) {
    alert("Password must be at least 6 characters")
    isValid = false;
  }

  // 4. Password match
  if (password !== confirmPassword) {
    alert("Passwords do not match")
    isValid = false;
  }

  // success
  if (isValid) {
    alert("Form submitted successfully!");
  }
});