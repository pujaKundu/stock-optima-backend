const express = require("express");
const router = express.Router();
const Purchase = require("../models/Purchase");

// Get all purchases
router.get("/purchases", async (req, res) => {
  try {
    const purchases = await Purchase.find();
    res.status(200).json(purchases);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a specific purchase
router.get("/purchases/:id", async (req, res) => {
  try {
    const purchase = await Purchase.findById(req.params.id);
    res.status(200).json(purchase);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add a new purchase
router.post("/purchases", async (req, res) => {
  try {
    const newPurchase = new Purchase(req.body);
    const savedPurchase = await newPurchase.save();
    res.status(201).json(savedPurchase);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a purchase
router.patch("/purchases/:id", async (req, res) => {
  try {
    const updatedPurchase = await Purchase.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedPurchase);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update the status of a purchase
router.patch("/purchases/:id/status", async (req, res) => {
  try {
    const { isApproved } = req.body;
    const updatedPurchase = await Purchase.findByIdAndUpdate(
      req.params.id,
      { isApproved },
      { new: true }
    );
    res.status(200).json(updatedPurchase);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a purchase
router.delete("/purchases/:id", async (req, res) => {
  try {
    await Purchase.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
