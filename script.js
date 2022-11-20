import all from "./index.js";

const booksDivEl = document.querySelector(".books-div");
const showMoreEl = document.querySelector(".show-more");
const showMoreBtns = document.getElementsByClassName("show-more-btn");
const cartEl = document.querySelector(".cart");
const cartObjects = document.querySelector(".cart-objects");
const cartModal = document.querySelector(".cart-modal");
const closeCart = document.querySelector(".close-cart");
const sumPriceEl = document.querySelector(".sum-price");

fetch("./Json/books.json")
  .then((res) => res.json())
  .then((data) => {
    //Books Catalog
    const displayBooks = data
      .map((item) => {
        return `
      <div class="book">
      <div class="book-image">
        <img src="${item.imageLink}" alt="${item.description}" />
      </div>
      <div class="book-info">
        <p class="book-title">
          ${item.title}
        </p>
      </div>
      <button type="button" class="show-more-btn">Show More</button>
    </div>`;
      })
      .join("");
    booksDivEl.innerHTML = displayBooks;

    //More Info Section
    const displayBookInfo = data.map((item) => {
      return `
          <div class="about-book">
          <div class="about-header">
            <div class="about-header-img">
              <img src="${item.imageLink}" alt="${item.description}" />
            </div>
            <div class="about-header-info">
              <h3 class="about-book-title">${item.title}</h3>
              <h3 class="about-book-price">\$${item.price}</h3>
            </div>
            </div>
            <div class="about-desc">
            ${item.description}
            </div>
            <div class="about-btns">
            <button data-id="close" class="close-btn" type="button">CLOSE</button>
            <button data-id="add-to-cart" class="add-to-cart-btn" type="button">ADD TO CART</button>
            </div>
            </div>`;
    });

    let book = 0;
    for (let i = 0; i < showMoreBtns.length; i++) {
      showMoreBtns[i].addEventListener("click", () => {
        showMoreEl.innerHTML = displayBookInfo[i];
        book = i;
      });
    }

    const cart = [];
    let sum = 0;
    document.addEventListener("click", (e) => {
      if (e.target.dataset.id === "close") {
        showMoreEl.innerHTML = "<h1>Solihiyn Kutubxonasi</h1>";
      } else if (e.target.dataset.id === "add-to-cart") {
        if (cartModal.classList.contains("hide")) {
          sum += data[book].price;
          sumPriceEl.textContent = `Total: - \$${sum}`;
          cart.push(data[book]);
          all.order.removeAttribute("disabled");
          cartObjects.textContent = `${cart.length}`;
          cartModal.innerHTML += `
          <div class="cart-book">
          <div id="div1"  class="cart-book-image">
            <img  src="${data[book].imageLink}" alt="${data[book].description}" />
          </div>
          <div class="cart-book-header">
            <h1>${data[book].author} - ${data[book].title}</h1>
            <p>
            ${data[book].description}
            </p>
          </div>
          <button class="remove-book-btn">X</button>
        </div>`;
        } else {
          return;
        }
      }
    });

    if (cart.length <= 0) {
      all.order.setAttribute("disabled", "");
    } else {
    }

    cartEl.addEventListener("click", () => {
      cartModal.classList.remove("hide");
      closeCart.classList.remove("hide");
    });
    closeCart.addEventListener("click", () => {
      cartModal.classList.add("hide");
      closeCart.classList.add("hide");
    });
  });
