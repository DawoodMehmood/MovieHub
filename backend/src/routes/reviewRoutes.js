const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/reviewController");

// Create review route
router.post("/", ReviewController.createReview);

// Update review route
router.put("/:id", ReviewController.updateReview);

// Delete review route
router.delete("/:id", ReviewController.deleteReview);

// Get all reviews for a movie route
router.get("/movie/:movieId", ReviewController.getReviewsByMovie);

module.exports = router;
