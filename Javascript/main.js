async function saveToCart() {
    const addProdToCartIcon = document.querySelectorAll(".articleIcon");
    const addToCartButton = document.querySelectorAll(".addToCartButton");

    addProdToCartIcon.forEach(element => {
        element.addEventListener("click", () => {
            console.log("klick");
        })
    })

    addToCartButton.forEach(element => {
        element.addEventListener("click", () => {
            console.log("klick");
        })
    })
}

saveToCart();