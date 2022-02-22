//Funktion som ritar ut alla produkter som finns i products.json filen
const productContainer = document.getElementById("productlist-container");

async function showProducts() {

    const data = await fetchFile("/webshop-projekt/Javascript/data/products.json");

    data.products.forEach((element, index) => {

        const product =
            `<article class="product-article">
                <section class="product-image">
                <a href="/webshop-projekt/HTML/productsite.html?category=${element.category}&name=${element.name}" class="noLinkStyle">
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

    //Hämtar fil och sparar promise 
    const data = await fetchFile("/webshop-projekt/Javascript/data/products.json");

    //Hämtar alla varukorgsikoner 
    const addProdToCartIcons = document.querySelectorAll(".articleIcon");
    
    //Skapar variabel som ska hålla id:et på varukorgen vi klickar på
    let cartID;
    
    //Skapar en tom array för att pusha in produkterna vi adderar i varukorgen
    const arrayWProducts = [];

    //forEach som går igenom varje ikon 
    addProdToCartIcons.forEach(icon => {
        icon.addEventListener("click", (e) => {

            //Sparar ned varukorgens id som vi klickat på
            cartID = e.target.id;
            
            //Om id:et matchar index i produktlistan
            if (data.products[cartID]) {

                //Pushar in objektet från produktlistan till den nya tomma arrayen
                arrayWProducts.push(JSON.stringify(data.products[cartID]));

                //Sparar arrayen i localstorage under nyckeln "product" 
               localStorage.setItem(`product`, arrayWProducts);
            }
        })
    })
}

//Kör showProducts funktion först och när den är klar kör vi saceToCartFromProdList funktionen
showProducts().then(saveToCartFromProdList()); 