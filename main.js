const GENRES = [
    {
        value: 28,
        displayText: 'Action',
    },
    {
        value: 12,
        displayText: 'Adventure',
    },
    {
        value: 16,
        displayText: 'Animation',
    },
    {
        value: 35,
        displayText: 'Comedy',
    },
    {
        value: 80,
        displayText: 'Crime',
    },
    {
        value: 99,
        displayText: 'Documentary',
    },
    {
        value: 18,
        displayText: 'Drama',
    },
    {
        value: 10751,
        displayText: 'Family',
    },
    {
        value: 14,
        displayText: 'Fantasy',
    },
    {
        value: 36,
        displayText: 'History',
    },
    {
        value: 27,
        displayText: 'Horror',
    },
    {
        value: 10402,
        displayText: 'Music',
    },
    {
        value: 9648,
        displayText: 'Mystery',
    },
    {
        value: 10749,
        displayText: 'Romance',
    },
    {
        value: 878,
        displayText: 'Sci-Fi',
    },
    {
        value: 10770,
        displayText: 'TV Movie',
    },
    {
        value: 53,
        displayText: 'Thriller',
    },
    {
        value: 10752,
        displayText: 'War',
    },
    {
        value: 37,
        displayText: 'Western',
    },
];

function initialLoad() {
    const genreSelector = document.getElementById('genre-option');

    GENRES.forEach((genre) => {
        const option = document.createElement('option');
        option.setAttribute('value', genre.value);
        option.innerText = genre.displayText;

        genreSelector.appendChild(option);
    });
}

initialLoad();

// when variables are not expected to change, use const
const genreToggle = document.getElementById("form-by-genre");
const actorToggle = document.getElementById("actor-search");
const directorToggle = document.getElementById("director-search");
const surpriseToggle = document.getElementById("surprise-me");

// when variables can have mutable values, use let
let url, genreId, page, randomId;

const resettableElements = [
    genreToggle,
    actorToggle,
    directorToggle,
];

function toggleElement(element) {
    resettableElements.forEach((node) => {
        node.style.display = "none";
    });
    element.style.display = "block";
}

// Show & hide genre selection
function ShowHideGenre() {
    toggleElement(genreToggle);
}

// Show & hide actor search
function ShowHideActor() {
    toggleElement(actorToggle);
}

// Show & hide director search
function ShowHideDirector() {
    toggleElement(directorToggle);
}

// ------------------------ Fetch by Genre
// Grab id from selected option
function getGenre(selectedGenre) {
    genreId = selectedGenre.value;
    page = Math.floor(Math.random() * 500) + 1;
    url = `https://api.themoviedb.org/3/discover/movie?api_key=e4fc096b1f7f3fbf48013349c7456fef&language=en-US&page=${page}&include_adult=false&with_genres=${genreId}`;
}


// ------------------------ Fecth by Actor


// ------------------------ Fetch by Director


// ------------------------ Surprise Me
// Generate random id
function SurpriseMe() {
    toggleElement(surpriseToggle);
    url = `https://api.themoviedb.org/3/discover/movie?api_key=e4fc096b1f7f3fbf48013349c7456fef`;
    // url = `https://api.themoviedb.org/3/movie/${randomId}?api_key=e4fc096b1f7f3fbf48013349c7456fef`;
}

function getGenresFromMovie(movie) {
    return GENRES.reduce((collector, genre) => {
        if (movie.genre_ids.includes(genre.value)) {
            collector.push(genre.displayText);
        }

        return collector;
    }, []).join(', ');
}

function displayMovieInformation(movie) {
    const oldResultBox = document.querySelector('#result-box');
    if (oldResultBox) {
        document.body.removeChild(oldResultBox);
    }
    const template = document.querySelector('#result-box-template');

    template.content.querySelector('.movie-title').innerText = movie.title;
    template.content.querySelector('.movie-overview').innerText = movie.overview;
    template.content.querySelector('#returnGenre').innerText = getGenresFromMovie(movie);
    template.content.querySelector('#returnYear').innerText = movie.release_date;

    const clone = document.importNode(template.content, true);

    document.body.appendChild(clone);
}

// Fetch movie from TMDB API
async function FindMovie() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const randomlySelectedMovie = data.results[randomIndex];

        displayMovieInformation(randomlySelectedMovie);
    } catch (error) {
        console.log(error);
    }
}
