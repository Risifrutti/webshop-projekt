const categoryDescContainer = document.querySelectorAll(".categoryDesc");



async function showCategoryDesc() {
    const data = await fetchFile("/webshop-projekt/Javascript/data/categories.json");

    data.categories.forEach(element => {

        categoryDescContainer.forEach(categoryDesc => {
            if (categoryDesc.id === "json" + element.categoryName) {
                categoryDesc.innerText = element.categoryDescription;
            }
        });
    });
}
showCategoryDesc();