const express = require("express");
const mongoose = require("mongoose");
const User = require("./userModel");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://deekshithadeechu14_db_user:test123@ac-3yjvryn-shard-00-00.kacwlze.mongodb.net:27017,ac-3yjvryn-shard-00-01.kacwlze.mongodb.net:27017,ac-3yjvryn-shard-00-02.kacwlze.mongodb.net:27017/?ssl=true&replicaSet=atlas-pez3xd-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


// CREATE
app.post("/users", async (req, res) => {
  const user = new User(req.body);

  await user.save();

  res.send("User Added");
});


// READ
app.get("/users", async (req, res) => {
  const users = await User.find();

  res.json(users);
});


// UPDATE
app.put("/users/:id", async (req, res) => {
  await User.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  res.send("User Updated");
});


// DELETE
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.send("User Deleted");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});