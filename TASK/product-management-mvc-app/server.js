const express=require("express");
const logger=require("./middlewares/logger");
const errorHandler=require("./middlewares/errorHandler");
const productRoute=require("./routes/productRoute");

const app=express();
app.use(express.json());

app.use(logger);

app.use("/products",productRoute);

app.get("/",(req,res)=>{
    res.send("Product Management MVC app is Running");
});

app.use(errorHandler);

const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Server is running at https://localhost:${PORT}`)
});


