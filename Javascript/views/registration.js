(function() {

  const userRegistrationForm = document.getElementById("userForm"); //Hämtar user registration form 
  const allErrorMessages = document.querySelectorAll(".errorMessage"); //Hämtar alla fel meddelanden
  const popupWindow = document.querySelector(".bg-modal");

  /*--Function to hide all error message--*/
  function hideErrorMessage(){
    allErrorMessages.forEach((errorElement)=> {
      errorElement.style.display = "none";
    });
  }

  //Lägger till event när man klickar på knappen "Become a member"
  userRegistrationForm.addEventListener('submit', (e) => {
    e.preventDefault(); //stoppar sidan från refresh
    
    hideErrorMessage(); //kallar funktion

    /*Lägger inputs till local storage*/
    //hämtar user inputs värje fält som ska sparas i local storage
    const userName = document.getElementById("name");
    const userEmail = document.getElementById("email");
    const userAddress = document.getElementById("address");
    const userPassword = document.getElementById("password");
    const userTown = document.getElementById("town");
    const userZipCode = document.getElementById("zipCode"); 
    const userPhone = document.getElementById("phoneNum");
  
    // user_Info - key i LS
    let userArray = localStorage.getItem('user_Info')?JSON.parse(localStorage.getItem('user_Info')):[];
    //skapar string till local storage
    function addNewUser(){
      const user_info = {
          'name': userName.value,
          'email': userEmail.value,
          'address': userAddress.value,
          'password': userPassword.value,
          'zipcode': userZipCode.value,
          'city': userTown.value,
          'phone': userPhone.value   
      }

      userArray.push(user_info); //pushar in user info
      //localStorage.setItem(key, value); spara data i local storage
      localStorage.setItem('user_Info', JSON.stringify(userArray));
    }

    let errorCount = 0;

    const inputsRegForm = userRegistrationForm.querySelectorAll(".memberInput"); //hämtar alla user inputs
    inputsRegForm.forEach((input) => {

      if(!input.checkValidity()) { //Kollar if inputs finns eller inte
        const errorElement = document.getElementById(input.id + 'errorMessage');
        //console.log(input.id); //radera sen
        errorElement.style.display = 'flex';
        errorCount++;
      }
    });

    if (errorCount === 0) {
      popupWindow.style.display="none"; //gömma registration form
      addNewUser();
    }

  });
  hideErrorMessage(); //activerar
  
})();