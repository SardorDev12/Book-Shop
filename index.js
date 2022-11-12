//body
const body = document.body;

//header
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

//nav
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
