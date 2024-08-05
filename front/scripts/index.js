
const { createCardMovie } = require("./controllers.js");
const fetchData = require("./data.js");

const movies = document.getElementById("movies");
const URL = "http://localhost:3000/movies";


function showMovies(arr) {
    movies.innerHTML = "";
    const elements = arr.map((item, key) => {
        return createCardMovie(item);
    });

    elements.forEach((item) => {
        movies.appendChild(item);
    });
}

const data = fetchData(URL);

data.then((res) => {
    if (res.error) alert("Esta data es de forma local");
    showMovies(res.data);
});
