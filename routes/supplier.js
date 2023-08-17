const express = require("express");
const router = express.Router();
const Supplier = require("../models/Supplier");

// GET all products
router.get("/suppliers", async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET a product by ID
router.get("/suppliers/:id", async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (!supplier) {
      return res.status(404).json({ error: "Supplier not found" });
    }
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST a new product
router.post("/suppliers", async (req, res) => {
  try {
    const newSupplier = new Supplier(req.body);
    const savedSupplier = await newSupplier.save();
    res.status(201).json(savedSupplier);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// PATCH/update a product by ID
router.patch("/suppliers/:id", async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!supplier) {
      return res.status(404).json({ error: "Supplier not found" });
    }
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


// DELETE a product by ID
router.delete("/suppliers/:id", async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndDelete(req.params.id);
    if (!supplier) {
      return res.status(404).json({ error: "Supplier not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
