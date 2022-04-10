const express = require('express');
const router = express.Router()
const { getAllMovies, getMovieByID, addMovie } = require('../controllers/movies.controller');
const myMiddleware = require('../middleware/myMiddleware');

// menggunakan middleware secara private
router.get("/", myMiddleware, getAllMovies)

router.get("/:id", getMovieByID)

router.post("/", addMovie)

module.exports = router