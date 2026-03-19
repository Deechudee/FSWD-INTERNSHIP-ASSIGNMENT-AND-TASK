const express=require("express");
const app=express();

app.use(express.json());

const PORT=3000

let products=[
    {id:1,name:"Laptop",price:50000},
    {id:2,name:"Mobile",price:20000},
    {id:3,name:"TV",price:60000},
    {id:4,name:"Car",price:200000}
];

app.get("/products",(req,res)=> {
    res.status(200).json(products);
});

app.post("/products",(req,res)=>{
     const { name }= req.body;
     const { price }=req.body;

     if (!name) {
        return res.status(400).json({message:"Name is required"});
     }
     let newProduct={
        id:products.length+1,
        name:name,
        price:price
     }
     products.push(newProduct);
     res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const { price } = req.body;

  const product = products.find(u => u.id === id);

  if (!product) {
    return res.status(404).json({ message: "User not found" });
  }

  product.name = name;
  product.price = price;
  res.status(200).json(product);
});

// DELETE → remove user
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  products = products.filter(u => u.id !== id);

  res.status(200).json({ message: "User deleted" });
});

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})

