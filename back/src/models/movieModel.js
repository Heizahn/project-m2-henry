class Movie {
    constructor({ title, year, director, duration, genre, rate, poster }) {
        if (!title || !poster || !director) {
            throw new Error(
                'Error: Las propiedades "title", "poster" y "director" son obligatorias.'
            );
        }
        (this.title = title),
            (this.year = year),
            (this.director = director),
            (this.duration = duration),
            (this.genre = genre),
            (this.rate = rate),
            (this.poster = poster);
    }

    getMovie() {
        return {
            title: this.title,
            year: this.year,
            director: this.director,
            duration: this.duration,
            genre: this.genre,
            rate: this.rate,
            poster: this.poster,
        };
    }
}

module.exports = Movie;
