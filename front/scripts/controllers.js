function createCardMovie({
    title,
    poster,
    year,
    duration,
    rate,
    genre,
    director,
}) {
    const divCard = document.createElement("div");
    const divDescription = document.createElement("div");
    const imgHtml = document.createElement("img");
    const titleHtml = document.createElement("h3");
    const description = descriptionMovie(year, duration, rate, genre, director);
    let titleReducer = "";

    if (title.length > 35) {
        for (let i = 0; i < 33; i++) {
            if (title[i]) titleReducer += title[i];
        }

        titleReducer += "...";
    } else {
        titleReducer = title;
    }

    titleHtml.innerText = titleReducer;
    imgHtml.src = poster;

    titleHtml.classList.add("text-center");
    imgHtml.classList.add("card-img-top");
    divDescription.classList.add("card-body");
    divDescription.appendChild(description);

    divCard.appendChild(titleHtml);
    divCard.appendChild(imgHtml);
    divCard.appendChild(divDescription);

    divCard.classList.add("card");
    divCard.classList.add("cardShadow");
    divCard.style = "width: 20rem; margin-bottom: 3rem;";

    return divCard;
}

function descriptionMovie(year, duration, rate, genre, director) {
    const div = document.createElement("div");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");

    h5.innerHTML = `Director: ${director}`;
    p.innerHTML = `<strong>Año:</strong> ${year} - <strong>Duración:</strong> ${duration}
	<strong>Clasificación:</strong> ${rate} - <strong>Géneros:</strong>${genre.map(
        (item) => " " + item
    )}`;

    h5.classList.add("card-title");
    p.classList.add("card-text");

    div.appendChild(h5);
    div.appendChild(p);

    return div;
}


module.exports = { createCardMovie };
