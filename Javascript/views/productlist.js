const productContainer = document.getElementById("productlist-container");


async function showProducts() {

    const response = await fetch("/webshop-projekt/Javascript/data/products.json");
    const data = await response.json();

    data.products.forEach(element => {

        const product =
            `<article class="product-article" id="product-article">
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
                

                <img id="addToCartIcon" src="/webshop-projekt/pictures/Icons/addtocarticon2.png" alt="add to cart"
                    class="articleIcon">
            </article>
        `

        productContainer.innerHTML += product;


    });

}