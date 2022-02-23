const userRegistrationForm = document.getElementById("userForm"); //Hämtar user registration form 
const memberSubmitButton = document.getElementById("memberBtn");
const allErrorMessages = document.querySelectorAll(".errorMessage"); //Hämtar alla fel meddelanden
console.log("Hej");

/*--Function to hide error--*/
function hideErrorMessage(){
  allErrorMessages.forEach((error)=> {
    error.style.display = "none";
  });
}

/*-----FORTSÄTT HÄR --------------------------------------------------------------*/
//Lägger till event när man klickar på knappen "Become a member"
userRegistrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const inputsRegForm = userRegistrationForm.querySelectorAll(".memberInput");
  inputsRegForm.forEach((input) => {
    if(!input.checkValidity()){ //Kollar if inputs are fild or not
      const errorMsg = document.getElementById(input.id + 'errors');
      errorMsg.style.display = "block";
    }
  });
  
});
hideErrorMessage(); //activerar