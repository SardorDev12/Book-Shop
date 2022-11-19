const form = document.getElementById("form");
const username = document.getElementById("name");
const surname = document.getElementById("surname");
const delivery = document.getElementById("delivery");
const street = document.getElementById("street");
const houseNumber = document.getElementById("house-number");
const flatNumber = document.getElementById("flat-number");
const submitBtn = document.querySelector(".submit-btn");
const radios = document.querySelectorAll('input[name="payment"]');

form.addEventListener("submit", (e) => {
  if (
    !isNaN(username.value) ||
    username.value.length < 4 ||
    username.value.indexOf(" ") != -1
  ) {
    document.querySelector(".name-error").textContent = "Invalid Input";
    username.style.borderColor = "red";
    e.preventDefault();
  }
  if (
    !isNaN(surname.value) ||
    surname.value.length < 4 ||
    surname.value.indexOf(" ") != -1
  ) {
    document.querySelector(".surname-error").textContent = "Invalid Input";
    e.preventDefault();
  }

  if (street.value.length < 5) {
    {
      document.querySelector(".street-error").textContent = "Invalid Input";
      e.preventDefault();
    }
  }
  if (
    isNaN(houseNumber.value) ||
    houseNumber.value < 0 ||
    houseNumber.value.length < 1
  ) {
    document.querySelector(".house-error").textContent = "Invalid Input";
    e.preventDefault();
  }
  if (
    flatNumber.value > 0 ||
    flatNumber.value[0] == "-" ||
    houseNumber.value.length < 1
  ) {
    document.querySelector(".flat-error").textContent = "Invalid Input";
    e.preventDefault();
  }
  let isRadio = false;
  radios.forEach((radio) => {
    if (radio.checked) {
      isRadio = true;
      return;
    }
  });
  if (!isRadio) {
    document.querySelector(".radio-error").textContent = "Invalid Input";
    e.preventDefault();
  }
});
