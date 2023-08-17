const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  clientName: {
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

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
