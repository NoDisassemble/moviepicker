let genreToggle = document.getElementById("form-by-genre");
let actorToggle = document.getElementById("actor-search");
let directorToggle = document.getElementById("director-search");

let title = document.getElementById("returnMovie");
let overview = document.getElementById("returnOverview");


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

// Random number generator for movie ID
function SurpriseMe() {
    let surpriseToggle = document.getElementById("surprise-me");
    toggleElement(surpriseToggle);
    randomId = Math.floor(Math.random() * 800000) + 1;
    console.log(randomId);
}

// Fetch movie from TMDB API
async function FindMovie() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${randomId}?api_key=e4fc096b1f7f3fbf48013349c7456fef`);
    const data = await response.json();
    if (data.success = false) {

    } else {
        title = data.title;
        overview = data.overview;
        console.log(data);
        title = document.getElementById("returnMovie").innerHTML = title;
        overview = document.getElementById("returnOverview").innerHTML = overview;
        console.log(title);
        return title;
    }
}
