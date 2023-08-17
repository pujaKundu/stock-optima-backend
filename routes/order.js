const express = require("express");
const router = express.Router();
const Sale = require("../models/Order");

// GET all sales
router.get("/orders", async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET a sale by ID
router.get("/orders/:id", async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    if (!sale) {
      return res.status(404).json({ error: "Sale not found" });
    }
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST a new sale
router.post("/orders", async (req, res) => {
  try {
    const newSale = new Sale(req.body);
    const savedSale = await newSale.save();
    res.status(201).json(savedSale);
  } catch (error) {

    res.status(500).json({error});
  }
});

// PATCH/update a sale by ID
router.patch("/orders/:id", async (req, res) => {
  try {
    const sale = await Sale.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!sale) {
      return res.status(404).json({ error: "Sale not found" });
    }
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// PATCH/update the approval status of a sale by ID
router.patch("/orders/:id/status", async (req, res) => {
  try {
    const sale = await Sale.findByIdAndUpdate(
      req.params.id,
      { isApproved: req.body.isApproved },
      { new: true }
    );
    if (!sale) {
      return res.status(404).json({ error: "Sale not found" });
    }
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE a sale by ID
router.delete("/orders/:id", async (req, res) => {
  try {
    const sale = await Sale.findByIdAndDelete(req.params.id);
    if (!sale) {
      return res.status(404).json({ error: "Sale not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
