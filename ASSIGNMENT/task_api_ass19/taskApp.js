const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];

// GET all
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST
app.post("/tasks", (req, res) => {
  tasks.push(req.body);
  res.send("Task added");
});

// PUT
app.put("/tasks/:id", (req, res) => {
  const id = req.params.id;
  tasks[id] = req.body;
  res.send("Updated");
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  tasks.splice(req.params.id, 1);
  res.send("Deleted");
});

app.listen(3000, () => console.log("Task API running"));