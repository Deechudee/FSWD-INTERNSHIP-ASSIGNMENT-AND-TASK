const express = require("express");
const app = express();

const PORT = 3000;

// middleware to parse JSON
app.use(express.json());

// =======================
// 🔥 CUSTOM LOGGER MIDDLEWARE
// =======================
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
};

// use middleware
app.use(logger);

// =======================
// 📦 STUDENTS DATA
// =======================
let students = [
  { id: 1, name: "Arjun", course: "AI" },
  { id: 2, name: "Priya", course: "Web" }
];

// =======================
// 📌 ROUTES
// =======================

// 1️⃣ GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// 2️⃣ GET student by ID
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// 3️⃣ ADD student
app.post("/students/add", (req, res) => {
  const { name, course } = req.body;

  const newStudent = {
    id: students.length + 1,
    name,
    course
  };

  students.push(newStudent);

  res.json({
    message: "Student added successfully",
    student: newStudent
  });
});

// =======================
// 🚀 START SERVER
// =======================
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});