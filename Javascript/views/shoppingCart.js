const cartAndPayLineSibling = document.querySelector(".cartAndPayLine");
const cartAndPayContentParent = document.querySelector(".cartAndPayContent");
const theProdArticle = document.createElement("article");
theProdArticle.classList.add("wrappingTheProds");
const proceedToCheckoutButton = document.querySelector(".proceedToCheckoutButton"); //Hämtar proceed knappen
const billingAndShippingBox = document.querySelector(".billingAndShippingBox"); //Hämtar billing&Shipping boxen
const inputQuantityAndDelete = document.querySelectorAll(".inputQuantityAndDeleteButtonWrapper"); //Hämtar input antal och delete knapp

//Ritar ut produkterna i varukorgen som man lagt till i varukorgen

//const prodContainer = document.querySelector(".wrapperForProductImgCart")
function drawProdsInCart() {

    if (localStorage.getItem("products")) {
        arrayWProducts = JSON.parse(localStorage.getItem("products"));
        console.log(arrayWProducts);

        arrayWProducts.forEach(element => {

            const prod = ` 
                <article class="cartTheProduct">
    
                <div class="wrapperForProductImgCart">
    
                    <img src="${element.prodImageURL}" alt="The product image"
                        class="productImageInCart">
    
                </div>
    
                <h4 class="cartProductNameHeading">${element.name}</h4>
    
                <div class="inputQuantityAndDeleteButtonWrapper">
    
                    <input type="number" value="1" class="inputQuantityInCart" id="inputQuantity">
    
                    <a href="#" class="deleteProdIconInCart">
                        <img src="/webshop-projekt/Pictures/Icons/krysset-svart.png" alt="Delete product icon"
                            class="deleteProdIconInCart">
                    </a>
    
                </div>
    
                <h4 class="priceHeadingInCart">
                    <div>$</div>
                    <div class="priceInCart">${element.price}</div>
                </h4>
    
                </article>
    
            `

            theProdArticle.innerHTML += prod;

            insertAfter(theProdArticle, cartAndPayLineSibling.nextSibling);
        })
    }

}

drawProdsInCart();

//Döljer proceed to checkout knapp om det är tomt i varukorg
if (theProdArticle.innerHTML === "") {
    console.log("varukorgen är tom")

    proceedToCheckoutButton.style.display = "none";

    // Skriver ut meddelande om varukorgen är tom
    const emptyCartMessage = document.createElement("h2");
    emptyCartMessage.textContent = "The cart is empty, add a product from the shopping list!";
    const emptyMessage = document.getElementById("emptyCartMessage");
    emptyMessage.appendChild(emptyCartMessage);

    emptyCartMessage.style.fontFamily = "viga";

} else {
    console.log("den är inte tom")

    proceedToCheckoutButton.style.display = "block";
}

//Dölja och visa Billing and shipping 

//Lägger till event när man klickar på knappen. Visar billing&Shipping box
proceedToCheckoutButton.addEventListener("click", () => {
    billingAndShippingBox.style.display = "flex";
    proceedToCheckoutButton.style.display = "none";

})

const confirmButton = document.getElementById("confirmPaymentButton");
const billingandshippingform = document.querySelector(".billingAndShippingForm");
const errorMessages = document.querySelectorAll(".error");

//Funktion som gömmer errormeddelanden.
function hideError() {
    errorMessages.forEach((e) => {
        e.style.display = "none";
    })
}

hideError();
//Vid klick på confirm på billing & shipping sker validering och 
//om godkänd så visas ett kvitto. 
confirmButton.addEventListener('click', (e) => {
    e.preventDefault();
    hideError();

    const inputsRegForm = billingandshippingform.querySelectorAll(".billingAndShippingInput");

    let errorCount = 0;

    inputsRegForm.forEach((input) => {

        if (!input.checkValidity()) { //Kollar if inputs are fild or not
            const errorMsg = document.getElementById(input.id + 'error');
            errorMsg.style.display = "block";
            errorCount++;
        }
    });
    if (errorCount === 0) {
        showReciept();
    }

});





let inputQuantityInCart = document.querySelectorAll(".inputQuantityInCart"); //Hämtar input antal
const deleteProdInCart = document.querySelectorAll(".deleteProdIconInCart"); //Hämtar krysset i varukorgen som tar bort produkt


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

//-----Kvitto----

//Körs inuti showReciept(). Ny styling för cart
function restyleCart() {
    const cartContainer = document.querySelector(".cartAndPayContentBox");
    if (!cartContainer.classList.contains("cartRecieptStyle")) {
        cartContainer.classList.add("cartRecieptStyle");

        const cartHeading = document.querySelector(".cartAndPayMainHeading");
        cartHeading.innerText = "Reciept";
    }
}



//Körs inuti showReciept(). Visar reciept containern
function showRecieptContainer() {
    const recieptContainer = document.getElementById("recieptContainer");
    if (recieptContainer.classList.contains("hideReciept")) {
        (recieptContainer.classList.remove("hideReciept"));
    }
}

//Close-knappen tar användaren till homepage OCH ska kanske rensa sparade artiklarna???
const closeRecieptBtn = document.querySelector(".closeRecieptButton");

closeRecieptBtn.addEventListener("click", (e) => {
    location.replace("/webshop-projekt/HTML/homepage.html");
});


function showReciept() {
    billingAndShippingBox.style.display = "none";

    restyleCart();
    showRecieptContainer();

    const recieptInfoContainer = document.getElementById("recieptInfo");

    const customerName = document.getElementById("nameB").value;
    const adress = document.getElementById("addressB").value;
    const postcode = document.getElementById("postcodeB").value;
    const city = document.getElementById("cityB").value;
    const email = document.getElementById("emailB").value;
    const tel = document.getElementById("phoneB").value;


    let recieptContent = `
        <div><h2>Thank you for your purchase!</h2></div>
        <div> 
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
        </div>
        
        `

    recieptInfoContainer.innerHTML = recieptContent;

};

// Funktion för att visa totalkostnaden för produkter i varukorgen

const showTotalCost = () => {
    
}