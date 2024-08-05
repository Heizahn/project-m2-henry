const axios = require("axios");
const URL = "http://localhost:3000/movies";
function createMovie({title, year, director, duration, genre, rate, poster}){

	const movie = {
		title, year, director, duration, genre, rate, poster
	}
	axios.post(URL, movie).then(res => alert(res.data.message))
}


module.exports = {createMovie}