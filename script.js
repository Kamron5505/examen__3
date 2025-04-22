import { movies } from './movies.js';

let row = document.querySelector("#row");

function renderMovies(filterData = movies) {
    let classTag = "w-[244px] h-[368px] bg-[#333333] rounded-[10px] shadow-lg p-4 flex flex-col items-center text-white";
    row.innerHTML = ""; // очищаем старые карточки

    filterData.map((item) => {
        const movie = document.createElement("div");
        movie.className = classTag;

        movie.innerHTML = `
        <img src="${item.Poster}" alt="Movie Poster" class="w-full h-[180px] object-cover rounded-[5px]" />
        <h2 class="mt-4 text-[16px] font-bold text-center">
            ${item.Title}
        </h2>
        <h3 class="mt-2 text-sm text-gray-300 text-center leading-tight">
            ${item.imdb_rating} • ${item.movie_year} • ${Math.floor(item.runtime / 60)}h ${item.runtime % 60}m<br />
            ${item.Categories}
        </h3>
        <button class="mt-auto bg-[#3CB371] text-white text-sm px-4 py-2 rounded-[5px]">
            More info
        </button>
    `;

        row.append(movie);
    });
}
function searchData() {
    let inputVal = document.querySelector("#search").value.toLowerCase();
    let filterData = movies.filter((item) =>
        typeof item.Title === "string" && item.Title.toLowerCase().includes(inputVal)

    );
    renderMovies(filterData);
}
function sortMovies() {
    let sortOption = document.querySelector("#sort");
    let sortedMovies = [...movies];

    if (sortOption.value == "az") {
        sortedMovies.sort((a, b) => typeof a.Title === "string" && a.Title.localeCompare(b.Title));
    } else if (sortOption.value == "za") {
        sortedMovies.sort((a, b) => typeof b.Title === "string" && b.Title.localeCompare(a.Title));
    }
    renderMovies(sortedMovies);
}

renderMovies();

document.querySelector("#searchBtn").addEventListener("click", searchData);
document.querySelector("#sort").addEventListener("change", sortMovies);
console.log(sortMovies);
