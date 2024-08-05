const { Router } = require("express");
const { getAllMovies, createMovie } = require("../controllers/moviesController");

const moviesRouter = Router();

moviesRouter.get("/", getAllMovies);
moviesRouter.post("/", createMovie)

module.exports = moviesRouter;
