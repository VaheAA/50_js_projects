const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6219d46a85c959170353e7406f7a4b08&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=6219d46a85c959170353e7406f7a4b08&query="';

const date = new Date();
const fullYear = date.toISOString().split('T')[0];
const IN_THEATRES_URL = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2021-09-16&primary_release_date.lte=${fullYear}&api_key=6219d46a85c959170353e7406f7a4b08`;

const TOP_RATED_MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=6219d46a85c959170353e7406f7a4b08&page=1&include_adult=false`;


const menuLinks = document.querySelectorAll('.menu-link');

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// get initial movies;
getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
}

menuLinks.forEach((link, index) => {

    link.addEventListener('click', () => {
        if (index === 0) {
            getTheaterMovies(IN_THEATRES_URL);
            async function getTheaterMovies(url) {
                const res = await fetch(url);
                const data = await res.json();
                showMovies(data.results);
            }
        } else if (index === 1) {
            getTopRatedMovies(TOP_RATED_MOVIES_URL);
            async function getTopRatedMovies(url) {
                const res = await fetch(url);
                const data = await res.json();
                showMovies(data.results);
            }
        }
    });

});







function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = ` <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>`;

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        search.value = '';
    } else {
        window.location.reload();
    }
});