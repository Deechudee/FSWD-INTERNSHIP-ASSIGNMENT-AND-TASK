import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <h2>🛒 Cart: {cart.length}</h2>
    </nav>
  );
}

export default Navbar;