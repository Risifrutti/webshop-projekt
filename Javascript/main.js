//Skapat array för produkterna som läggs till i varukorgen
let arrayWProducts = [];

const categoryContainers = document.querySelectorAll(".categoryData");


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