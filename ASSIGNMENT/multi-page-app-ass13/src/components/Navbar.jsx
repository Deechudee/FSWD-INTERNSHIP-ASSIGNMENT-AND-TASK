import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>EcoLife 🌱</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;