const moviesServices = require("../services/moviesServices");

async function getAllMovies(req, res) {
    try {
        let movies = await moviesServices.getMovies();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({
            error: "Error interno del servidor",
        });
    }
}

async function createMovie(req, res) {
    try {
        const { title, year, director, duration, genre, rate, poster } = req.body;

        const result  = await moviesServices.createMovie({
            title,
            year,
            director,
            duration,
            genre,
            rate,
            poster,
        })

        if (result.ok) {
            res.status(201).json({
                message: result.message
            })
        }
    } catch (err) {
        res.status(500).json({
            error: "Error interno del servidor",
        })
    }

}

module.exports = {
    getAllMovies,
    createMovie
};
