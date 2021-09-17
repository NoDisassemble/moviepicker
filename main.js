// Show & hide genre selection
function ShowHideGenre() {
    let genreToggle = document.getElementById("form-by-genre");
    if (genreToggle.style.display === "block") {
        genreToggle.style.display = "none";
    } else {
        genreToggle.style.display = "block";
    }
}

// Show & hide actor search
function ShowHideActor() {
    let actorToggle = document.getElementById("actor-search");
    if (actorToggle.style.display === "block") {
        actorToggle.style.display = "none";
    } else {
        actorToggle.style.display = "block";
    }
}

// Show & hide director search
function ShowHideDirector() {
    let directorToggle = document.getElementById("director-search");
    if (directorToggle.style.display === "block") {
        directorToggle.style.display = "none";
    } else {
        directorToggle.style.display = "block";
    }
}