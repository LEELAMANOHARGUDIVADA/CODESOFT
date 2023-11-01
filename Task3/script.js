function openSlide() {
    var menuBtn = document.getElementById("Nav-Menu");

    if (menuBtn.classList.contains("responsive")) {
        menuBtn.classList.remove("responsive");
    } else {
        menuBtn.classList.add("responsive");
    }
}

function closeSlide(){
    var menuBtn = document.getElementById("Nav-Menu");

    if (menuBtn.classList.contains("responsive")) {
        menuBtn.classList.remove("responsive");
    } else {
        menuBtn.classList.add("responsive");
    }
}