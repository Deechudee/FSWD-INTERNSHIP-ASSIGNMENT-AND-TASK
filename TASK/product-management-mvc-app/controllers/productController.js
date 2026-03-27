const productModel = require("../models/productModel");
const AppError = require("../utils/appError");

const getProducts = (req, res, next) => {
  try {
    const products = productModel.getAllProducts();
    res.status(200).json({
      success: true,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

const getProduct = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const product = productModel.getProductById(id);

    if (!product) {
      return next(new AppError("Product not found", 404));
    }

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

const createProduct = (req, res, next) => {
  try {
    const { name, price, category } = req.body;

    if (!name || !price || !category) {
      return next(new AppError("All fields are required", 400));
    }

    const newProduct = productModel.addProduct({ name, price, category });

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: newProduct
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct
};