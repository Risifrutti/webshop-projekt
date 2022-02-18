const hamburger = document.getElementById("hamburgerMenuIcon");
const body = document.querySelector("body");


hamburger.addEventListener("click", (e) => {

    const hamburgerMenu = `
<nav id="ham-nav">
<div id="ham-top">  <img id="ham-close" src="/webshop-projekt/pictures/Icons/krysset.png"
alt="close hamburger menu " class="headerIcons"></div>
<div id="menu-items">
    <a href="/webshop-projekt/HTML/homepage.html" class="noLinkStyle">Home</a>
    <a href="/webshop-projekt/HTML/productlist.html" class="noLinkStyle">Shop</a>
    <a href="#" target="_blank" class="noLinkStyle">Sign in</a>
    </a>
</div>
</nav>`;

    body.innerHTML += hamburgerMenu;




});

