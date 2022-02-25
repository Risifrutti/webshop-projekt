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
		signInPopup.style.display = "flex";
		hamburgerMenu.classList.add("hide-ham"); //Döljer hamburgare meny
	});
});

/*Closing sign in for with "X"*/ 
closePopupButton.addEventListener("click", () => {
	signInPopup.style.display = "none";
});

/*Become a member form comes up on click to "Become a member" button*/
becomeMemberButton.addEventListener("click", (e)=> {
	e.preventDefault();
	signInPopup.style.display = "none"; //Döljer sign in form popup
	becomeMemberPopup.style.display = "flex"; //Visar become member popup
}); 

backToSignInButton.addEventListener("click", (e) => {
	e.preventDefault();
	becomeMemberPopup.style.display = "none"; //Döljer become a member popup
	signInPopup.style.display = "flex"; //Visar sign in popup
});

closeBecomeMember.addEventListener("click", () => {
	becomeMemberPopup.style.display = "none"; //Döljer member popup
});
///////////////////////////////////////////////////////////////////////////////////////
/*------------------WORKING----------------------*/
/*Hämtar key=user_info från local storage*/
const userData = JSON.parse(localStorage.getItem("user_Info"));

console.log("Hämtat user data från local storage", userData);
//skriver ut 'password' & 'email' from local storage
const userPassFromLocalStorage = userData.map( user => user.password);
const userPass = userPassFromLocalStorage[0]; //user name from local storage

const userEmailFromLocalStorage = userData.map( user => user.email);
const userEmail = userEmailFromLocalStorage[0];

console.log(userPass, userEmail);

/*Hämtar log in info */
const emailInput = document.getElementById("emailSignIn");
const passwordInput = document.getElementById("passwordSignIn");
const signInButton = document.getElementById("sigInBtn"); //Hämtar sign in button

signInButton.addEventListener("click", (e) => {
	e.preventDefault();

	//Kollar om fälltet är infylda
	if(emailInput.value === "" || passwordInput.value === ""){
		passwordInput.value = "";
		alert("Please fill in email & password!"); //Kan andra det till snyggare
	}
	else if(emailInput.value === userEmail || passwordInput.value === userPass){
		console.log("User inlogat");
	}
	else{
		console.log("Create a user!");
	}

	
});
