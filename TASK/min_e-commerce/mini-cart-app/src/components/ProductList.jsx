import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../services/productService";

function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;