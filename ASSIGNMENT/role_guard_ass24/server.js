const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./userModel");

const app = express();

app.use(express.json());


// MongoDB Connection
mongoose.connect("mongodb://deekshithadeechu14_db_user:test123@ac-yp5u5wo-shard-00-00.c4jwb89.mongodb.net:27017,ac-yp5u5wo-shard-00-01.c4jwb89.mongodb.net:27017,ac-yp5u5wo-shard-00-02.c4jwb89.mongodb.net:27017/?ssl=true&replicaSet=atlas-fscqjo-shard-0&authSource=admin&appName=secure")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));



// SIGNUP
app.post("/signup", async (req, res) => {

  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    role
  });

  await user.save();

  res.send("Signup Successful");
});



// LOGIN
app.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.send("User not found");
  }

  const match = await bcrypt.compare(
    password,
    user.password
  );

  if (!match) {
    return res.send("Wrong password");
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role
    },
    "secretkey"
  );

  res.json({
    message: "Login Successful",
    token
  });
});



// AUTH MIDDLEWARE
const auth = (req, res, next) => {

  const header = req.headers.authorization;

  if (!header) {
    return res.send("Token missing");
  }

  const token = header.split(" ")[1];

  try {

    const decoded = jwt.verify(
      token,
      "secretkey"
    );

    req.user = decoded;

    next();

  } catch (err) {

    res.send("Invalid token");
  }
};



// ADMIN CHECK MIDDLEWARE
const checkAdmin = (req, res, next) => {

  if (req.user.role !== "admin") {
    return res.send("Access denied");
  }

  next();
};



// ADMIN ONLY ROUTE
app.delete(
  "/users/:id",
  auth,
  checkAdmin,

  async (req, res) => {

    await User.findByIdAndDelete(req.params.id);

    res.send("User Deleted By Admin");
  }
);



app.listen(3000, () => {
  console.log("Server running on port 3000");
});