const productContainer = document.getElementById("productlist-container");


async function showProducts() {

    const response = await fetch("/webshop-projekt/Javascript/data/products.json");
    const data = await response.json();

    console.log(data);

    data.products.forEach(element => {

        const product =
            `<a href="/webshop-projekt/HTML/productsite.html" class="noLinkStyle">
            <article class="product-article">
                <section class="product-image">

                </section>
                <section class="product-info">
                    <h3 class="product-name">Productname</h3>
                    <p class="product-price">Price</p>
                </section>

                <img id="addToCartIcon" src="/webshop-projekt/pictures/Icons/addtocarticon2.png" alt="add to cart"
                    class="articleIcon">
            </article>
        </a>`

        productContainer.innerHTML += product;


    });

}

showProducts();