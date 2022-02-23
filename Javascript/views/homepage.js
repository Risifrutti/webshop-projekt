const categoryBooks = document.getElementById("#jsonBooks")

async function showCategoryText() {
    const response = await fetch("/webshop-projekt/javascript/data/categories.json");
    const categoryDesc = await response.json();
}