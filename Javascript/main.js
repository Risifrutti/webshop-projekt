//Skapat array för produkterna som läggs till i varukorgen
let arrayWProducts = [];

//Funktion som ritar ut kategorinamn samt lägger till en querystring
const categoryContainers = document.querySelectorAll(".categoriesList");

async function showCategoryText() {
    const data = await fetchFile("/webshop-projekt/Javascript/data/categories.json");

    data.categories.forEach(element => {

        categoryContainers.forEach(container => {

           const categoryText = `
                <li>|</li>

                <a href="/webshop-projekt/HTML/productlist.html?category=${element.categoryName.toLowerCase()}" class="noLinkStyle">
                    <li class="categoryData" id="${element.categoryName.toLowerCase()}">${element.categoryName}</li>
                </a>
           `
           
           container.innerHTML += categoryText;
        });
    });
}

showCategoryText();

/*
    <li>|</li>
                <a href="" class="noLinkStyle" id="linkBooks">
                    <li class="categoryData" id="books"></li>
                </a>
                <li>|</li>
                <a href="" class="noLinkStyle" id="linkCassettes">
                    <li class="categoryData" id="cassettes"></li>
                </a>
                <li>|</li>
                <a href="" class="noLinkStyle" id="linkVHS">
                    <li class="categoryData" id="vhs"></li>
                </a>

*/

