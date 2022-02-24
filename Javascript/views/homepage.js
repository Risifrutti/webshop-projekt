const categoryContainers = document.querySelectorAll(".categoryData");
const categoryDescContainer = document.querySelectorAll(".homepageCategory");

//Funktion som ritar ut kategorinamn 
async function showCategoryText() {
    const data = await fetchFile("/webshop-projekt/Javascript/data/categories.json");

    data.categories.forEach(element => {

        categoryContainers.forEach(categoryContainer => {
            if (categoryContainer.id === element.categoryName.toLowerCase()) {
                categoryContainer.innerText = element.categoryName;
            }
        });
    });
}

showCategoryText();

//Funktion som ritar ut kategoribeskrivnignen och ger den en querystring 
async function showCategoryDesc() {

    const data = await fetchFile("/webshop-projekt/Javascript/data/categories.json");

    data.categories.forEach(element => {

        categoryDescContainer.forEach(categoryDesc => {

            if (categoryDesc.id === "category" + element.categoryName) {

                const categoryDescriptionText = `
                <a href="/webshop-projekt/HTML/productlist.html?category=${element.categoryName.toLowerCase()}">
                    <p class="categoryDesc" id="json${element.categoryName}">${element.categoryDescription}</p>
                </a>
                `

                categoryDesc.innerHTML += categoryDescriptionText;

            } 
        });
    });
}
showCategoryDesc();
