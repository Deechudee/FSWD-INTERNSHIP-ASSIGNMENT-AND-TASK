const express = require("express");
const router = express.Router();

let authors = [];

router.get("/", (req, res) => {
  res.json(authors);
});

router.post("/", (req, res) => {
  authors.push(req.body);
  res.send("Author added");
});

module.exports = router;