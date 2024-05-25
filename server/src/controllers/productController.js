import mongoose from "mongoose";
import Product from "../models/productModel.js";
import errorHandler from "../utils/errorHandler.js";

export const createProduct = async (req, res, next) => {
  try {
    if (!req.body) {
      return errorHandler(400, "All fields are required");
    }
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return errorHandler(400, "Please give valid id");
    }
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return errorHandler(400, "Product not found");
    }
    res.status(201).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return errorHandler(400, "Please give valid id");
    }
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json({
      success: true,
      updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const { limit } = req.query;

    const product = await Product.find({ category }).limit(limit);
    if (!product) {
      return errorHandler(400, "Product not found");
    }
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllProduct = async (req, res, next) => {
  try {
    const { title, category, brand, page, sort, limit } = req.query;

    const queryObject = {};
    const currentPage = Number(page) || 1;
    const resultPerPage = 8;
    const skip = (currentPage - 1) * resultPerPage;

    if (title) {
      queryObject.title = { $regex: new RegExp(title, "i") };
    }

    if (category) {
      queryObject.category = { $regex: new RegExp(category, "i") };
    }

    if (brand) {
      queryObject.brand = { $regex: new RegExp(brand, "i") };
    }

    const sortOptions = {};

    if (sort === "desc") {
      sortOptions.price = -1;
    } else {
      sortOptions.price = 1;
    }

    const products = await Product.find(queryObject)
      .skip(skip)
      .limit(limit)
      .sort(sortOptions);

    if (!products || products.length === 0) {
      return errorHandler(404, "Products not found");
    }

    res.status(200).json({
      success: true,
      totalProducts: products.length,
      products,
    });
  } catch (error) {
    next(error);
  }
};
