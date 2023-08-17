const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  createDate: {
    type: Date,
    required: true,
  },
  office: {
    type: String,
    required: true,
  },
  receiveDate: {
    type: Date,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
    unique: false,
  },
  quantity: {
    type: Number,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
  },
  vat: {
    type: Number,
    required: true,
  },
  isApproved: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
    required: false,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
