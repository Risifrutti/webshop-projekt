//Dölja och visa Billing and shipping 
const proceedToCheckoutButton = document.querySelector(".proceedToCheckoutButton"); //Hämtar proceed knappen
const billingAndShippingBox = document.querySelector(".billingAndShippingBox"); //Hämtar billing&Shipping boxen
const inputQuantityAndDelete = document.querySelectorAll(".inputQuantityAndDeleteButtonWrapper"); //Hämtar input antal och delete knapp

//Lägger till event när man klickar på knappen. Visar billing&Shipping box
proceedToCheckoutButton.addEventListener("click", () => {
    billingAndShippingBox.style.display = "flex";
    proceedToCheckoutButton.style.display = "none";

})

const billingandshippingform = document.querySelector(".billingAndShippingForm");
const errorMessages = document.querySelectorAll(".error");


function hideError(){
    errorMessages.forEach((e) =>{
        e.style.display = "none";
    })
}

billingandshippingform.addEventListener('submit', (e) => {
    e.preventDefault();
    hideError();
    
    const inputsRegForm = billingandshippingform.querySelectorAll(".billingAndShippingInput");
    inputsRegForm.forEach((input) => {
      if(!input.checkValidity()){ //Kollar if inputs are fild or not
        const errorMsg = document.getElementById(input.id + 'error');
        errorMsg.style.display = "block";
      }
    });
    
  });


hideError();

