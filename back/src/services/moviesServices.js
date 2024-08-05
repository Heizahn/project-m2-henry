const Movie = require('../models/Movie')

module.exports = {
    getMovies: async () => {
        const movies = await Movie.find();

        return movies;
    },

    createMovie: async ({ title, year, director, duration, genre, rate, poster }) => {
        const genreArr = genre.split(' ');

        await Movie.create({
            title,
            year,
            director,
            duration,
            genre: genreArr,
            rate,
            poster
        })

        return {
            ok: true,
            message: 'Película Creada'
        }
    }
};
