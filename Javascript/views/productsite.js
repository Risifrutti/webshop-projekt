//Funktion som ritar ut produkten man klickat på
async function drawCurrentProduct() {
    
    const data = await fetchFile("/webshop-projekt/Javascript/data/products.json");

    const productCard = document.querySelector(".productCard");
    const params = new URLSearchParams(location.search);
    const prodCategory = params.get("category");
    const prodName = params.get("name");

    console.log(prodCategory + " " + prodName);

    data.products.forEach((element, index) => {

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
                    <p><button id="${index}" class="addToCartButton">Add to cart</button></p>
                </section>
            `

        productCard.innerHTML += product;

        }
    })    
}

drawCurrentProduct();
//

//Funktion som sparar den produkt man klickat på i local storage
async function saveToCartFromProdSite() {
    
    //Hämtar fil och sparar promise 
    const data = await fetchFile("/webshop-projekt/Javascript/data/products.json");

    //Hämtar knappen
    const addToCartButtons = document.querySelectorAll(".addToCartButton");

    let arrayWProducts = [];

    //skapar variabel där id:et för knappen sparas
    let cartID;

    addToCartButtons.forEach(button => {

        button.addEventListener("click", (e) => {

            //Sparar ned varukorgens id som vi klickat på
            cartID = e.target.id;
            
            //Om id:et matchar index i produktlistan
            if (data.products[cartID]) {
            
                //Pushar in objektet från produktlistan till den nya tomma arrayen
                arrayWProducts.push(JSON.stringify(data.products[cartID]));
                
                //Sparar arrayen i localstorage under nyckeln "product" 
                localStorage.setItem("products", arrayWProducts);
            }
        })
    })
}

saveToCartFromProdSite();