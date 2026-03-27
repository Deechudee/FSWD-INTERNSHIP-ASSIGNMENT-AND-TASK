const express = require("express");
const app = express();


const PORT = 3000;


app.get("/students", (req, res) => {
  const students = [
    { name: "Amit", course: "AI" },
    { name: "Riya", course: "FullStack" },
    { name: "Rahul", course: "DataScience" }
  ];

  res.json(students);
});

// /courses route
app.get("/courses", (req, res) => {
  const courses = ["AI", "ML", "FullStack", "DataScience"];
  res.json(courses);
});


// =====================
// TASK 2: MINI WEBSITE
// =====================

// Home route
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to My Website</h1>
    <p>${new Date()}</p>
  `);
});

// About route
app.get("/about", (req, res) => {
  res.send(`
    <h1>About Page</h1>
    <p>This is about us page</p>
    <p>${new Date()}</p>
  `);
});

// Services route
app.get("/services", (req, res) => {
  res.send(`
    <h1>Services Page</h1>
    <p>We provide web development services</p>
    <p>${new Date()}</p>
  `);
});

// Contact route
app.get("/contact", (req, res) => {
  res.send(`
    <h1>Contact Page</h1>
    <p>Email: example@gmail.com</p>
    <p>${new Date()}</p>
  `);
});


// =====================
// START SERVER
// =====================
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});