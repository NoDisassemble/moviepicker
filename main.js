let genreToggle = document.getElementById("form-by-genre");
let actorToggle = document.getElementById("actor-search");
let directorToggle = document.getElementById("director-search");


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
    let genreToggle = document.getElementById("form-by-genre");
    toggleElement(genreToggle);
}

// Show & hide actor search
function ShowHideActor() {
    let actorToggle = document.getElementById("actor-search");
    toggleElement(actorToggle);
}

// Show & hide director search
function ShowHideDirector() {
    let directorToggle = document.getElementById("director-search");
    toggleElement(directorToggle);
}

// ------------------------ Fetch by Genre
// Grab id from selected option
function getGenre(s) {
    genreId = (s[s.selectedIndex].id);
    page = Math.floor(Math.random() * 500) + 1;
    console.log("Genre: " + document.getElementById("genre-option").value);
    console.log("Genre Id: " + s[s.selectedIndex].id);
    console.log("Page: " + page);
    url = `https://api.themoviedb.org/3/discover/movie?api_key=e4fc096b1f7f3fbf48013349c7456fef&language=en-US&page=${page}&include_adult=false&with_genres=${genreId}`;
}


// ------------------------ Fecth by Actor


// ------------------------ Fetch by Director


// ------------------------ Surprise Me
// Generate random id
function SurpriseMe() {
    let surpriseToggle = document.getElementById("surprise-me");
    randomId = Math.floor(Math.random() * 800000) + 1;
    toggleElement(surpriseToggle);
    console.log("Movie Id: " + randomId);
    url = `https://api.themoviedb.org/3/movie/${randomId}?api_key=e4fc096b1f7f3fbf48013349c7456fef`;
    return randomId;
}

// Fetch movie from TMDB API
async function FindMovie() {
    let response = await fetch(url);
    let data = await response.json();
    if (!response.ok) {
        SurpriseMe();
        FindMovie();
    }
    title = data.title;
    overview = data.overview;
    if (overview === "") {
        overview = "Description Unavailable";
    }
    genre = data.genres.map(genre => (" " + genre.name));
    if (genre.length === 0) {
        genre = "Unavailable";
    }
    year = data.release_date;
    if (year === "") {
        year = "Unavailable";
    }
    title = document.getElementById("returnMovie").innerHTML = title;
    overview = document.getElementById("returnOverview").innerHTML = overview;
    genre = document.getElementById("returnGenre").innerHTML = genre;
    year = document.getElementById("returnYear").innerHTML = year;
    console.log(data);
    console.log("Movie Id: " + randomId)
    console.log("Title: " + title);
    console.log("Description: " + overview);
    console.log("Genres: " + data.genres.map(genre => (" " + genre.name)));
    console.log("Release Date: " + year);

}
