const hamburgerIcon = document.getElementById("hamburgerMenuIcon");
const closeHamIcon = document.getElementById("ham-close");
const hamburgerMenu = document.getElementById("hamburger-nav");

hamburgerIcon.addEventListener("click", (e) => {
    hamburgerMenu.classList.remove("hide-ham");
});

closeHamIcon.addEventListener("click", (e) => {
    hamburgerMenu.classList.add("hide-ham");
});


