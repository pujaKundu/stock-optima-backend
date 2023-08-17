const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
  },
  contactName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: false,
  },
});

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
