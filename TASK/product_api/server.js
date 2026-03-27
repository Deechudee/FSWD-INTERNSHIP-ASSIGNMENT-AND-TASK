const express = require("express");
const app = express();

const PORT = 3000;

// middleware
app.use(express.json());

// =======================
// 📦 PRODUCTS DATA
// =======================
let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 }
];

// =======================
// 📌 ROUTES (CRUD)
// =======================

// 1️⃣ GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

// 2️⃣ POST new product
app.post("/products", (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length+1,
    name,
    price
  };

  products.push(newProduct);

  res.json({
    message: "Product added",
    product: newProduct
  });
});

// 3️⃣ PUT update product
app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.name = name;
  product.price = price;

  res.json({
    message: "Product updated",
    product
  });
});

// 4️⃣ DELETE product
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);

  res.json({ message: "Product deleted" });
});

// =======================
// 🚀 START SERVER
// =======================
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});