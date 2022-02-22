//New popups coden, to show and hide popups
const closePopupButton = document.querySelector(".closePopup"); //Hämtar close knappen
const becomeMemberButton = document.querySelector(".becomeMemberButton"); //Hämtar become a member button
const signInPopup = document.querySelector(".background-modal"); //Hämtar sign in popup form
const becomeMemberPopup = document.querySelector(".bg-modal"); //Hämtar become a member popup form
const backToSignInButton = document.querySelector(".backToSignInButton"); //Hämtar back to sign in button
const closeBecomeMember = document.querySelector(".closeBecomeMember"); //Hämtar close "x" member form
const signInButtonHeader = document.querySelectorAll(".signInHeader"); //Sign in header


becomeMemberPopup.style.display = "none"; //Gömmer Become member popup när sign in sida laddas
signInPopup.style.display = "none"; //Gämmer Sign in popup

/* Sign in - header */
signInButtonHeader.forEach(button => {
	button.addEventListener("click", (e) => {
		e.preventDefault();
		console.log("Sign in clicked");
		signInPopup.style.display = "flex";
		hamburgerMenu.classList.add("hide-ham");
	});
});

/*Closing sign in for with "X"*/ 
closePopupButton.addEventListener("click", () => {
	console.log("clicked close");
	signInPopup.style.display = "none"; //Döljer sign in popup
});

/*Become a member form comes up on click to "Become a member" button*/
becomeMemberButton.addEventListener("click", (e)=> {
	e.preventDefault(); //Stoppar att "refresha" sida
	signInPopup.style.display = "none"; //Döljer sign in form popup
	becomeMemberPopup.style.display = "flex"; //Visar become member popup
}); 

backToSignInButton.addEventListener("click", (e) => {
	e.preventDefault();
	becomeMemberPopup.style.display = "none"; //Döljer become a member popup
	signInPopup.style.display = "flex"; //Visar sign in popup
});

closeBecomeMember.addEventListener("click", () => {
	console.log("clicked");
	becomeMemberPopup.style.display = "none"; //Döljer member popup
});

