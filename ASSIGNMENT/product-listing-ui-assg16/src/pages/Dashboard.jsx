import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import Filter from "../components/Filter";
import { useState } from "react";

function Dashboard() {
    const [category, setCategory] = useState("");
const [search, setSearch] = useState("");

const filteredProducts = products.filter((p) => {
  return (
    (category === "" || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );
});
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="top-section">
          <h2>Management Products</h2>
          <button className="add-btn">Add Product</button>
        </div>

        {/* Filters */}
        <Filter setCategory={setCategory} setSearch={setSearch} />

        <div className="grid">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        

        {/* Pagination */}
        <div className="pagination">
          <button>{"<"}</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>{">"}</button>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;