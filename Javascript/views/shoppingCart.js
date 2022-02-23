//Ritar ut produkterna i varukorgen som man lagt till i varukorgen
function drawProdsInCart() {
    
    console.log(arrayWProducts);
}

drawProdsInCart();


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
let inputQuantityInCart = document.querySelectorAll(".inputQuantityInCart"); //Hämtar input antal
const deleteProdInCart = document.querySelectorAll(".deleteProdIconInCart"); //Hämtar krysset i varukorgen som tar bort produkt
const confirmPaymentButton = document.getElementById("confirmPaymentButton");// Hämtar knappen i beställningsformuläret.

//Lägger till event när man klickar på knappen. Visar billing&Shipping box
proceedToCheckoutButton.addEventListener("click", () => {

    billingAndShippingBox.style.display = "flex"; //Visar billing and shipping  
    proceedToCheckoutButton.style.display = "none"; //Döljer proceed to checkout knapp

    inputQuantityInCart.forEach(element => { //Gör alla input fältet disabled

        element.disabled = true;
    })

    deleteProdInCart.forEach(element => { //Gömmer alla delete knappar 
        element.style.display = "none";
    })

})

//Räkna ut totalt pris för alla items i varukorgen. --EJ FÄRDIG--
inputQuantityInCart.forEach(quantity => {

    let productQuantity
});

//----Kvitto----

confirmPaymentButton.addEventListener("click", (e) => {
    e.preventDefault();
    billingAndShippingBox.style.display = "none";

    const recieptContainer = document.getElementById("recieptContainer");
    const customerName = document.getElementById("billingName").value;
    const adress = document.getElementById("billingAdress").value;
    const postcode = document.getElementById("billingPostcode").value;
    const city = document.getElementById("billingCity").value;
    const email = document.getElementById("billingEmail").value;
    const tel = document.getElementById("billingTel").value;



    let recieptContent = `
       <section> <h3>
        Your contact info:
        </h3>
        <p>${email}</p>
        <p>${tel}</p>
        </section>

        <section>
        <h3>
        Shipping adresss:
        </h3>
       <p>${customerName}</p> 
       <p>${adress}</p>
       <p>${postcode}</p>
       <p>${city}</p>
        </section>

        <section>
        <h3>
        Shipping method:
        </h3>
        <p>Economy Shipping</p>
        </section>

        <section>
        <h3>
        Estimated arrival: 
        </h3>
        <p>5-12 days</p>

        </section>

        <button class="closeRecieptButton">Close</button>
    `

    recieptContainer.innerHTML = recieptContent;

});

