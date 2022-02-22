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