document.getElementById("myForm").addEventListener("submit", function(event) {

event.preventDefault(); 

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let message = document.getElementById("message");

if (name === "" || email === "" || password === "") {
    alert("Please fill in all fields!");
}
else if (!email.includes("@")) {
    alert("Please enter a valid email address!");
}
else if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
}
else {
    alert("Form submitted successfully!");
    message.textContent = `Welcome, ${name}! Your email is ${email}.`;
}
});