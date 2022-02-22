const searchButton = document.getElementById("searchbutton");

searchButton.addEventListener("click", (e), async function () {
    e.preventDefault();

    const searchField = document.getElementById("searchfield");
    const searchInput = searchField.value.toUpperCase();

    const data = await fetchFile("/webshop-projekt/Javascript/data/products.json");

    await showProducts();
    const product = document.getElementById("product-article");

    data.products.forEach(element => {
        if (!element.name.toUpperCase().includes(searchInput)) {
            console.log("MUPP");
        }

    });



});
//Funktion som hämtar json fil och returnerar dess data 
async function fetchFile(file) {
    const response = await fetch(file);
    const data = await response.json();

    return data;
}

