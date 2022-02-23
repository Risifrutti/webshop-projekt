(function() {

  const userRegistrationForm = document.getElementById("userForm"); //Hämtar user registration form 
  const allErrorMessages = document.querySelectorAll(".errorMessage"); //Hämtar alla fel meddelanden

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
  //hämtar user inputs värje fält
  const userName = document.getElementById("name");
  const userEmail = document.getElementById("email");
  const userAddress = document.getElementById("address");
  const userPassword = document.getElementById("password");
  const userTown = document.getElementById("town");
  const userZipCode = document.getElementById("zipCode");

  let userArray = localStorage.getItem('user')?
  JSON.parse(localStorage.getItem('user')): [];

  function addUser(){
    const user_info = {
        'name': userName.value,
        'email': userEmail.value,
        'address': userAddress.value,
        'password': userPassword.value,
        'zipcode': userZipCode.value,
        'city': userTown.value
    }

    userArray.push(user_info);
    localStorage.setItem('user', JSON.stringify(userArray));
  }
  addUser();
  
})();