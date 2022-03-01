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
                    <p class="price">$${element.price}</p>
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
    const addToCartButton = document.querySelector(".addToCartButton");

    //skapar variabel där id:et för knappen sparas
    let buttonID;

    //Skapar en tom array
    //let arrayWProducts = [];

    addToCartButton.addEventListener("click", (e) => {

        if (localStorage.getItem("products")) {
            arrayWProducts = JSON.parse(localStorage.getItem("products"));
            console.log(arrayWProducts);
        } 
             
        //Sparar ned varukorgens id som vi klickat på
        buttonID = e.target.id;
            
        //Om id:et matchar index i produktlistan
        if (data.products[buttonID]) {;

            //Pushar in objektet från produktlistan till arreyen
            arrayWProducts.push(data.products[buttonID]);
                
            //Sparar arrayen i localstorage under nyckeln "product" 
            localStorage.setItem("products", JSON.stringify(arrayWProducts));
            
            console.log(arrayWProducts);
        }
    })
}

saveToCartFromProdSite();
//