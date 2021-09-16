// Show & hide genre selection
function ShowHideGenre() {
    let genreToggle = document.getElementById("form-by-genre");
    if (genreToggle.style.display === "block") {
        genreToggle.style.display = "none";
    } else {
        genreToggle.style.display = "block";
    }
}