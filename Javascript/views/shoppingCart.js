//Dölja och visa Billing and shipping 
const proceedToCheckoutButton = document.querySelector(".proceedToCheckoutButton"); //Hämtar proceed knappen
const billingAndShippingBox = document.querySelector(".billingAndShippingBox"); //Hämtar billing&Shipping boxen
const inputQuantityAndDelete = document.querySelectorAll(".inputQuantityAndDeleteButtonWrapper"); //Hämtar input antal och delete knapp

//Lägger till event när man klickar på knappen. Visar billing&Shipping box
proceedToCheckoutButton.addEventListener("click", () => {
    billingAndShippingBox.style.display = "flex";
    proceedToCheckoutButton.style.display = "none";

    inputQuantityAndDelete.forEach(element => {
        element.style.display = "none";
    })

})

