/*
document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});
*/

//New popups coden, to show and hide
const closePopupButton = document.querySelector(".closePopup"); //Hämtar close knappen
const becomeMemberButton = document.querySelector(".becomeMemberButton"); //Hämtar become a member button
const signInPopup = document.querySelector(".background-modal"); //Hämtar popup form

closePopupButton.addEventListener("click", () => {
	console.log("clicked");
	signInPopup.style.display = "none";
})