import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  // 💰 calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart Items</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          {/* 💰 Total Price */}
          <h3>Total: ₹{totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;