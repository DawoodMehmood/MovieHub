const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieController");

// Create movie route
router.post("/", MovieController.createMovie);

// Get all movies route
router.get("/", MovieController.getAllMovies);

// Get single movie route
router.get("/:id", MovieController.getMovieById);

// Update movie route
router.put("/:id", MovieController.updateMovie);

// Delete movie route
router.delete("/:id", MovieController.deleteMovie);

module.exports = router;
