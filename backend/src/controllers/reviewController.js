const Review = require("../models/reviewModel");

// Create review controller
exports.createReview = async (req, res, next) => {
  try {
    const { content, rating, movie, createdBy } = req.body;
    const review = await Review.create({ content, rating, movie, createdBy });
    res.status(201).json({ review });
  } catch (error) {
    next(error);
  }
};

// Update review controller
exports.updateReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content, rating } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { content, rating },
      { new: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ review: updatedReview });
  } catch (error) {
    next(error);
  }
};

// Delete review controller
exports.deleteReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Review.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

// Get all reviews for a movie controller
exports.getReviewsByMovie = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const reviews = await Review.find({ movie: movieId });
    res.status(200).json({ reviews });
  } catch (error) {
    next(error);
  }
};
