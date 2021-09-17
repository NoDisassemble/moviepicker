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
    let genreToggle = document.getElementById("actor-search");
    if (genreToggle.style.display === "block") {
        genreToggle.style.display = "none";
    } else {
        genreToggle.style.display = "block";
    }
}

// Show & hide director search
function ShowHideDirector() {
    let genreToggle = document.getElementById("director-search");
    if (genreToggle.style.display === "block") {
        genreToggle.style.display = "none";
    } else {
        genreToggle.style.display = "block";
    }
}