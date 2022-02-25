//New popups coden, to show and hide popups
const closePopupButton = document.querySelector(".closePopup"); //Hämtar close knappen
const becomeMemberButton = document.querySelector(".becomeMemberButton"); //Hämtar become a member button
const signInPopup = document.querySelector(".background-modal"); //Hämtar sign in popup form
const becomeMemberPopup = document.querySelector(".bg-modal"); //Hämtar become a member popup form
const backToSignInButton = document.querySelector(".backToSignInButton"); //Hämtar back to sign in button
const closeBecomeMember = document.querySelector(".closeBecomeMember"); //Hämtar close "x" member form
const signInButtonHeader = document.querySelectorAll(".signInHeader"); //Sign in header
const userSignInDiv = document.querySelector("#userSignIn");
const signInHeaderAElement = document.querySelector(".changeToUserName");

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

/*Hämtar log in info */
const emailInput = document.getElementById("emailSignIn");
const passwordInput = document.getElementById("passwordSignIn");
const signInButton = document.getElementById("sigInBtn"); //Hämtar sign in button

signInButton.addEventListener("click", (e) => {
	e.preventDefault();

	const userData = JSON.parse(localStorage.getItem("user_Info"));

	console.log("Hämtat user data från local storage", userData);
	//skriver ut 'password' & 'email' from local storage
	const userPassFromLocalStorage = userData.map( user => user.password);
	const userPass = userPassFromLocalStorage.toString(); //user name from local storage
	
	const userEmailFromLocalStorage = userData.map( user => user.email);
	const userEmail = userEmailFromLocalStorage.toString();

	const userNameFromLocalStorage = userData.map( user => user.name);
	const userName = userNameFromLocalStorage.toString();
	console.log(userName);

	console.log(userEmail + " " + userPass);

	//Kollar om fälltet är infylda
	if(emailInput.value === "" || passwordInput.value === ""){
		passwordInput.value = "";
		alert("Please fill in email & password!"); //Kan andra det till snyggare
	}
	else if(emailInput.value == userEmail && passwordInput.value == userPass){
		console.log("User inlogat");
		signInPopup.style.display = "none";

		staySignedIn();
		location.reload();

	}
	else{
		console.log("Create a user!");

		alert("User does not exist. Please check if the information is correct or become a member.");

	}

});

if(localStorage.getItem("inloggedUser")) {

	const userData = JSON.parse(localStorage.getItem("user_Info"));
	const userNameFromLocalStorage = userData.map( user => user.name);
	const userName = userNameFromLocalStorage.toString();

	userSignInDiv.innerHTML = `
	<img src="/webshop-projekt/pictures/Icons/user-icon.png" alt="user icon"></img>
	<h4> ${userName} </h4>
	`;

	signInHeaderAElement.innerHTML = `
		<img src="/webshop-projekt/pictures/Icons/user-icon.png" class="hideHeaderElements"alt="user icon"></img>
		<h4 class="hideHeaderElements"> ${userName} </h4>
	`
} 

//Funktion som sparar användaren som är inloggad
function staySignedIn() {
	
	const inloggedUserValue = {
		'email': emailInput.value,
		'password': passwordInput.value
	};

	localStorage.setItem('inloggedUser', JSON.stringify(inloggedUserValue));
}