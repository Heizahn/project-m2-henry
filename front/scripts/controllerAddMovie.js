const { createMovie } = require("./createMovie.js");
const btnCancel = document.getElementById("btnCancel");
const formMovie = document.getElementById("formMovie");

btnCancel.addEventListener("click", ()=>{
	formMovie.reset()
})

formMovie.addEventListener("submit", (event)=>{
	event.preventDefault();

	const title = document.getElementById("title").value;
	const year = document.getElementById("year").value;
	const director = document.getElementById("director").value;
	const duration = document.getElementById("duration").value;
	const genre = document.getElementById("genre").value;
	const rate = document.getElementById("rate").value;
	const poster = document.getElementById("poster").value;

	if (title === "" || year === "" || director === "" || duration === "" || genre === "" || rate === "" || poster === "") {
		alert("Todos los campos son obligatorios");
		return
	}

	createMovie({title, year, director, duration, genre, rate, poster});
})