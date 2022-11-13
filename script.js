import booksDiv from "./index.js";
import showMore from "./index.js";
const booksDivEl = document.querySelector(".books-div");
const showMoreEl = document.querySelector(".show-more");
const showMoreBtns = document.getElementsByClassName("show-more-btn");
const cartEl = document.querySelector(".cart");
const cartObjects = document.querySelector(".cart-objects");
const cartModal = document.querySelector(".cart-modal");

fetch("../books.json")
  .then((res) => res.json())
  .then((data) => {
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
    document.addEventListener("click", (e) => {
      if (e.target.dataset.id == "close") {
        showMoreEl.innerHTML = "<h1>Solihiyn Kutubxonasi</h1>";
      } else if (e.target.dataset.id == "add-to-cart") {
        cart.push(data[book]);
        cartObjects.textContent = `${cart.length}`;
      } else {
        return;
      }
    });

    cartEl.addEventListener("click", () => {
      cartModal.classList.remove("hide-modal");
    });
  });
