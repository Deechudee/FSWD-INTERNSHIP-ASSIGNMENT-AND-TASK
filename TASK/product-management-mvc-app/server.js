const express = require("express");
const productRoutes = require("./routes/productRoutes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use(logger);

app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Product MVC API is Running");
});

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});