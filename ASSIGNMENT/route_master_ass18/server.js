const express = require("express");
const app = express();

app.use(express.json());

const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

app.listen(3000, () => console.log("Server running"));