//Funktion som ritar ut produkten man klickat på
async function drawCurrentCategory() {
    
    const data = await fetchFile("/webshop-projekt/Javascript/data/products.json");

    const productCard = document.querySelector(".productCard");
    const params = new URLSearchParams(location.search);
    const prodCategory = params.get("category");
    const prodName = params.get("name");

    console.log(prodCategory + " " + prodName);

    data.products.forEach(element => {

        if (prodCategory === element.category && prodName === element.name) {
            
            const product = `    
                <div class="textInfo">
                    <img class="productImg" src="${element.prodImageURL}" alt="product image">
                </div>
                <section class="textInfo">
                    <h2 class="productName">${element.name}</h2>
                    <p class="price">${element.price}</p>
                    <p class="productDescriptionText">${element.prodDescription}</p>
                    <p><input type="number" id="quantity" class="quantity" min="1" placeholder="1"></p>
                    <p><button class="addToCartButton">Add to cart</button></p>
                </section>
            `

        productCard.innerHTML += product;

        }
    })    
}

drawCurrentCategory();

//Funktion som sparar den produkt man klickat på i local storage
async function saveToCartFromProdSite() {
    
    //Hämtar fil och sparar promise 
    const data = await fetchFile("/webshop-projekt/Javascript/data/products.json");

    //Hämtar knappen
    const addToCartButtons = document.querySelectorAll(".addToCartButton");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {

            console.log("klick");

        })
    })
}

//saveToCartFromProdSite();