const Movie = require("../models/movieModel");

// Create movie controller
exports.createMovie = async (req, res, next) => {
  try {
    const { title, description, imageUrl, videoUrl, createdBy } = req.body;
    const movie = await Movie.create({
      title,
      description,
      imageUrl,
      videoUrl,
      createdBy,
    });
    res.status(201).json({ movie });
  } catch (error) {
    next(error);
  }
};

// Get all movies controller
exports.getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({ movies });
  } catch (error) {
    next(error);
  }
};

// Get single movie controller
exports.getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ movie });
  } catch (error) {
    next(error);
  }
};

// Update movie controller
exports.updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, imageUrl, videoUrl } = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { title, description, imageUrl, videoUrl },
      { new: true }
    );
    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ movie: updatedMovie });
  } catch (error) {
    next(error);
  }
};

// Delete movie controller
exports.deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
