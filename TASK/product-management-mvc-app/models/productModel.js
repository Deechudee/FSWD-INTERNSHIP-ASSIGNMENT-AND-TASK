let products = [
  { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
  { id: 2, name: "Shoes", price: 2000, category: "Fashion" }
];

const getAllProducts = () => {
  return products;
};

const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

const addProduct = (productData) => {
  const newProduct = {
    id: products.length + 1,
    ...productData
  };
  products.push(newProduct);
  return newProduct;
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct
};