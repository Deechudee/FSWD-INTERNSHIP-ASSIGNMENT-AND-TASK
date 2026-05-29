const express = require("express");
const mongoose = require("mongoose");
const Post = require("./db");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://deekshithadeechu14_db_user:test123@ac-3yjvryn-shard-00-00.kacwlze.mongodb.net:27017,ac-3yjvryn-shard-00-01.kacwlze.mongodb.net:27017,ac-3yjvryn-shard-00-02.kacwlze.mongodb.net:27017/?ssl=true&replicaSet=atlas-pez3xd-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.post("/posts", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.send("Post Saved");
});

app.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.listen(3000, () => console.log("Server running"));