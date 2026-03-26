import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blog";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      {/* Navigation */}
      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;