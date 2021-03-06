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
                <a href="/webshop-projekt/HTML/productsite.html?category=${element.category}&name=${element.name}" class="noLinkStyle">
                    <h3 class="product-name">${element.name}</h3>
                    <p class="product-price">$${element.price}</p>
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
    //let arrayWProducts = [];

    //forEach som går igenom varje ikon 
    addProdToCartIcons.forEach(icon => {
        icon.addEventListener("click", (e) => {

            if (localStorage.getItem("products")) {
                arrayWProducts = JSON.parse(localStorage.getItem("products"));
                console.log(arrayWProducts);
            }

            //Sparar ned varukorgens id som vi klickat på
            cartID = e.target.id;

            //Om id:et matchar index i produktlistan
            if (data.products[cartID]) {

                //Pushar in objektet från produktlistan till den nya tomma arrayen
                arrayWProducts.push(data.products[cartID]);

                //Sparar arrayen i localstorage under nyckeln "product" 
                localStorage.setItem("products", JSON.stringify(arrayWProducts));

                console.log(arrayWProducts);
            }
        })
    })
}

showProducts().then(saveToCartFromProdList());


//--Sökfunktionen--
const searchButton = document.getElementById("searchbutton");

searchButton.addEventListener("click", async function (e) {
    e.preventDefault();

    const searchField = document.getElementById("searchfield");
    const searchInput = searchField.value.toUpperCase();
    const productList = document.querySelectorAll(".product-article");

    const data = await fetchFile("/webshop-projekt/Javascript/data/products.json");

    //Tar bort hideproduct-klassen från föregående sökningar
    productList.forEach(element => {
        if (element.classList.contains("hideProduct")) {
            element.classList.remove("hideProduct");
        }
    });

    //Jämför det användaren sökt på med produktens namn och beskrivning 
    //och lägger till klassen "hideProduct" på de produkter som inte matchar.
    data.products.forEach(element => {
        if (!element.name.toUpperCase().includes(searchInput) && !element.prodDescription.toUpperCase().includes(searchInput)) {
            productList.forEach(product => {
                const productName = product.childNodes[3].childNodes[1].childNodes[1];
                if (element.name.toUpperCase().includes(productName.innerText.toUpperCase())) {
                    product.classList.add("hideProduct");
                    console.log(product);
                }
            });
        }
    });
});


//Funktion som visar produkterna för vald kategori
async function showChoosenCategoryProds() {
    
    const data = await fetchFile("/webshop-projekt/Javascript/data/products.json");

    const params = new URLSearchParams(location.search);
    const prodCategory = params.get("category");
    const productList = document.querySelectorAll(".product-article");

    //Om querystringen är tom (null) så gör vi inget
    if (prodCategory === null) { 

        return;

    } else { //Men om den innehåller en kategori gör vi nedan
    
        data.products.forEach(element => {
            
            //Om produktens kategori är lika med den som är i querystring så gör vi inget 
            if (element.category.toLowerCase() === prodCategory) {

                return;
    
            } else {//Annars döljer vi den produkten då den inte hör till vald kategori
    
                productList.forEach(product => {
                    
                    const productName = product.childNodes[3].childNodes[1].childNodes[1];
    
                    if(productName.innerText == element.name) {
    
                        product.classList.add("hideProduct");
    
                    }
                
                })
                
            }
    
        });

    }
    
}

showChoosenCategoryProds();

