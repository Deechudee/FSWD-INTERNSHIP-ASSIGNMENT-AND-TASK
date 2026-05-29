const express = require("express");
const router = express.Router();

let books = [];

router.get("/", (req, res) => {
  res.json(books);
});

router.post("/", (req, res) => {
  books.push(req.body);
  res.send("Book added");
});

module.exports = router;