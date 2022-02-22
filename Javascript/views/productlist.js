//Funktion som ritar ut alla produkter som finns i products.json filen
const productContainer = document.getElementById("productlist-container");

async function showProducts() {

    const data = await fetchFile("/webshop-projekt/Javascript/data/products.json");

    data.products.forEach((element, index) => {

        const product =
            `<article class="product-article">
                <section class="product-image">
                <a href="/webshop-projekt/HTML/productsite.html" class="noLinkStyle">
                <img id="productimage" src=${element.prodImageURL}
                alt="Product image"> 
                </a>
                </section>
                <section class="product-info"> 
                <a href="/webshop-projekt/HTML/productsite.html" class="noLinkStyle">
                    <h3 class="product-name">${element.name}</h3>
                    <p class="product-price">${element.price}</p>
                    </a>
                </section>
                

                <img id="${index}" src="/webshop-projekt/pictures/Icons/addtocarticon2.png" alt="add to cart"
                    class="articleIcon">
            </article>
        `

        productContainer.innerHTML += product;


    });

}

//Funktion som sparar den produkt man klickat på i local storage
async function saveToCartFromProdList() {

    const data = await fetchFile("/webshop-projekt/Javascript/data/products.json");

    const addProdToCartIcons = document.querySelectorAll(".articleIcon");
    
    let cartID;
    
    const arrayWProducts = [];

    addProdToCartIcons.forEach(icon => {
        icon.addEventListener("click", (e) => {

            cartID = e.target.id;
            
            if (data.products[cartID]) {

                arrayWProducts.push(JSON.stringify(data.products[cartID]));

                console.log(arrayWProducts)

               localStorage.setItem(`product`, arrayWProducts);
            }
        })
    })
}

showProducts().then(saveToCartFromProdList()); 