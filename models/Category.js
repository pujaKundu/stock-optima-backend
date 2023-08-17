const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
