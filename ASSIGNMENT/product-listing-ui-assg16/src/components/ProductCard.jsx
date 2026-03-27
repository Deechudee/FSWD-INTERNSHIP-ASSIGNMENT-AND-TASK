function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <button>Add to Cart</button>
      <span className="rating">⭐ 4.5</span>
    </div>
  );
}

export default ProductCard;