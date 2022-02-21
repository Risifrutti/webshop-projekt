//Dölja och visa Billing and shipping 
const proceedToCheckoutButton = document.querySelector(".proceedToCheckoutButton"); //Hämtar proceed knappen
const billingAndShippingBox = document.querySelector(".billingAndShippingBox"); //Hämtar billing&Shipping boxen
let inputQuantityInCart = document.querySelectorAll(".inputQuantityInCart"); //Hämtar input antal
const deleteProdInCart = document.querySelectorAll(".deleteProdIconInCart"); //Hämtar krysset i varukorgen som tar bort produkt


//Lägger till event när man klickar på knappen. Visar billing&Shipping box
proceedToCheckoutButton.addEventListener("click", () => {

    billingAndShippingBox.style.display = "flex"; //Visar billing and shipping  
    proceedToCheckoutButton.style.display = "none"; //Döljer oroceed to checkout knapp

    inputQuantityInCart.forEach(element => { //Gör alla input fältet disabled

        element.disabled = true;
    })

    deleteProdInCart.forEach(element => { //Gömmer alla delete knappar 
        element.style.display = "none";
    })

})

