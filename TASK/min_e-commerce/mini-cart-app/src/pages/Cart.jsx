import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {

  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

    </div>
  );
};

export default Cart;