const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./User");

const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://deekshithadeechu14_db_user:test123@ac-yp5u5wo-shard-00-00.c4jwb89.mongodb.net:27017,ac-yp5u5wo-shard-00-01.c4jwb89.mongodb.net:27017,ac-yp5u5wo-shard-00-02.c4jwb89.mongodb.net:27017/?ssl=true&replicaSet=atlas-fscqjo-shard-0&authSource=admin&appName=secure")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));



// SIGNUP API
app.post("/signup", async (req, res) => {

  const { name, email, password } = req.body;

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create user
  const user = new User({
    name,
    email,
    password: hashedPassword
  });

  await user.save();

  res.send("Signup Successful");
});



// LOGIN API
app.post("/login", async (req, res) => {

  const { email, password } = req.body;

  // find user
  const user = await User.findOne({ email });

  console.log(password);
  console.log(user);

  if (!user) {
    return res.send("User not found");
  }

  // compare password
  const match = await bcrypt.compare(
    password,
    user.password
  );

  if (!match) {
    return res.send("Wrong password");
  }

  // generate token
  const token = jwt.sign(
    { id: user._id },
    "secretkey"
  );

  res.json({
    message: "Login Successful",
    token
  });
});

app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.send("User Deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});