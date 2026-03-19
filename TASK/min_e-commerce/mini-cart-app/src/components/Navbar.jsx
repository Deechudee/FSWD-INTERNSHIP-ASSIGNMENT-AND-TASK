import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ background: "#333", color: "white", padding: "10px" }}>
      <h2>Mini E-Commerce</h2>
      <p>Cart Items: {cart.length}</p>
    </div>
  );
}

export default Navbar;