const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  totalOrder: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  totalSales: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: false,
    unique:false
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
