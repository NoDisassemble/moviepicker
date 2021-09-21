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