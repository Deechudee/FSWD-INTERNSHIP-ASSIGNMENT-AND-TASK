const model = require("../models/taskModel");

exports.getTasks = (req, res) => {
  res.json(model.getTasks());
};

exports.addTask = (req, res) => {
  model.addTask(req.body);
  res.send("Added");
};