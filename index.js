//BODY
const body = document.body;

//HEADER
const header = document.createElement("header");
body.appendChild(header);

//logo
const logoDiv = document.createElement("div");
logoDiv.classList.add("logo-div");
const logo = document.createElement("img");
logo.src = "./Images/logo.png";
const imgLink = document.createElement("a");
imgLink.setAttribute("href", "#");
imgLink.appendChild(logo);
logoDiv.appendChild(imgLink);
header.appendChild(logoDiv);

//NAV
const nav = document.createElement("nav");
nav.classList.add("navbar");
const ul = document.createElement("ul");
const texts = ["Home", "About Us", "Category", "Cart", "Contact Us"];
for (let i = 0; i <= 4; i++) {
  const li = document.createElement("li");
  const liLink = document.createElement("a");
  liLink.innerText = `${texts[i]}`;
  liLink.setAttribute("href", `#${texts[i]}`);
  li.appendChild(liLink);
  ul.appendChild(li);
}
nav.appendChild(ul);
header.appendChild(nav);

//MAIN
//background image
const main = document.createElement("main");
const mainBgImage = document.createElement("img");
mainBgImage.src = "./Images/bg-image 1.png";
main.appendChild(mainBgImage);
const headerHeight = header.clientHeight;
main.style.height = `calc(100vh - ${headerHeight}px`;
body.appendChild(main);

//main title
const titleDiv = document.createElement("div");
titleDiv.classList.add("main-title");
const title1 = document.createElement("div");
title1.classList.add("title1");
const title1Img = document.createElement("img");
title1Img.src = "./Images/logo.png";
title1.appendChild(title1Img);
const title2 = document.createElement("h1");
title2.innerText = "KUTUBXONASI";
titleDiv.appendChild(title1);
titleDiv.appendChild(title2);
main.appendChild(titleDiv);

//SHOPPING SECTION
//background
const shopping = document.createElement("section");
shopping.classList.add("shopping-section");
const shoppingBgImage = document.createElement("div");
shoppingBgImage.classList.add("shopping-bg-image");
const shoppingImage = document.createElement("img");
shoppingImage.src = "./Images/bg-image 2.png";
shoppingBgImage.appendChild(shoppingImage);
shopping.appendChild(shoppingBgImage);
body.appendChild(shopping);
//books
const booksDiv = document.createElement("div");
booksDiv.classList.add("books-div");
shopping.appendChild(booksDiv);
//show more
const showMore = document.createElement("div");
showMore.classList.add("show-more");
const showMoreTitle = document.createElement("h2");
showMoreTitle.classList.add("show-more-title");
showMoreTitle.innerText = "Show More";
showMore.appendChild(showMoreTitle);
shopping.appendChild(showMore);
//cart
const cart = document.createElement("div");
cart.classList.add("cart");
const cartTitle = document.createElement("p");
cartTitle.innerText = "CART";
cartTitle.classList.add("cart-title");
const cartObjects = document.createElement("h1");
cartObjects.classList.add("cart-objects");
cart.appendChild(cartObjects);
cart.appendChild(cartTitle);
shopping.appendChild(cart);
//cart modal
const cartModal = document.createElement("div");
cartModal.classList.add("cart-modal");
cartModal.classList.add("hide-modal");
shopping.appendChild(cartModal);

export default { booksDiv, showMore };
