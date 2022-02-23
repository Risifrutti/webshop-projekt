(function() {

  const userRegistrationForm = document.getElementById("userForm"); //Hämtar user registration form 
  const allErrorMessages = document.querySelectorAll(".errorMessage"); //Hämtar alla fel meddelanden

  console.log(allErrorMessages);

  /*--Function to hide all error message--*/
  function hideErrorMessage(){
    allErrorMessages.forEach((errorElement)=> {
      errorElement.style.display = "none";
    });
  }


  //Lägger till event när man klickar på knappen "Become a member"
  userRegistrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    hideErrorMessage();

    const inputsRegForm = userRegistrationForm.querySelectorAll(".memberInput"); //hämtar alla user inputs
    inputsRegForm.forEach((input) => {
      if(!input.checkValidity()) { //Kollar if inputs finns eller inte
        const errorElement = document.getElementById(input.id + 'errorMessage');
        console.log(input.id); //radera sen
        errorElement.style.display = 'flex';
      }
    });
    
  });

  hideErrorMessage(); //activerar

  /*Lägger inputs till local storage*/
  
})();