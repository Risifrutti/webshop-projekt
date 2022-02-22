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
    let i;

    addProdToCartIcons.forEach(icon => {
        icon.addEventListener("click", (e) => {

            i = e.target.id;
            let prodstring = "";

            if (data.products[i]) {

                prodString = + JSON.stringify(data.products[i]);

                localStorage.setItem(`product`, prodString);
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

