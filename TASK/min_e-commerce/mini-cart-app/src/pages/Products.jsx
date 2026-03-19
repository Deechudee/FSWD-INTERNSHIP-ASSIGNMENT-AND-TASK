import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { getProducts } from "../services/productService";

function Products() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const products = getProducts();

  const isInCart = (id) => {
    return cart.find(item => item.id === id);
  };

  return (
    <div>
      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <h4>{product.name}</h4>
          <p>Price: ₹{product.price}</p>

          {isInCart(product.id) ? (
            <button onClick={() => removeFromCart(product.id)}>
              Remove from Cart
            </button>
          ) : (
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Products;