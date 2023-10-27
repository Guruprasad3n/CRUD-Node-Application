const express = require("express");
const {
  homeRouter,
  AddaProduct,
  readAllProducts,
  ReadProductByID,
  UpdateAProduct,
  DeleteAProduct,
  createProductReview,
  deleteReview,
  virtualPopulatioOfreview,
} = require("../Controllers/productController");
const router = express.Router();

router.get("/", homeRouter);

// Add a Product
router.post("/api/products", AddaProduct);

// Read All Products
router.get("/api/products", readAllProducts);

// Read Product by ID
router.get("/api/products/:id", ReadProductByID);

// Update a Product
router.put("/api/products/:id", UpdateAProduct);

// Delete a Product
router.delete("/api/products/:id", DeleteAProduct);

// Create a Review for a Product
router.post("/api/products/:id/reviews", createProductReview);

// Delete a Review
router.delete("/api/products/:productId/reviews/:reviewId", deleteReview);

// Virtual Population of Reviews for a Product
router.get("/api/products/:productId/reviews", virtualPopulatioOfreview);

module.exports = router;
