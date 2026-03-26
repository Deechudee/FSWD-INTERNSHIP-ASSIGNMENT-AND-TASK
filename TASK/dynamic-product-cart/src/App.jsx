import { useState, useEffect } from "react";
import "./App.css";

function App() {

  
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  
  const [cartCount, setCartCount] = useState(0);

 
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  
  useEffect(() => {
    console.log("Cart updated:", cartCount);
  }, [cartCount]);

  return (
    <div className="container">
        <h1>🛒 Cart Count: {cartCount}</h1>

        {products.map((product) => (
          <div key={product.id} className="card">
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        ))}
    </div>
  );
}

export default App;