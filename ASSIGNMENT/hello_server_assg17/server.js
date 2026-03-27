const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("Welcome to Home Page");
});

app.get("/about",(req,res)=>{
    res.send("This is About Page");
});

app.get("/contact",(req,res)=>{
    res.send("Contact us at email@example.com");
});

app.use((req,res)=>{
    res.status(404).send("Page not found")
});

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
}
);