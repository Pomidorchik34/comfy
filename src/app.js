import { getData, createCard } from "./functions.js";

const wrapper = document.querySelector(".cards");
const loader = document.querySelector(".loader");
let item;
document.addEventListener("DOMContentLoaded", function () {
  getData("https://strapi-store-server.onrender.com/api/products").then(
    (data) => {
      loader.style.display = "none";
      let index = data.data;
      index.forEach((value) => {
        item = createCard(value);
        wrapper.innerHTML += item;

        const cards = document.querySelectorAll(".card");
        cards.length > 0 &&
          cards.forEach(function (card) {
            card.addEventListener("click", function (event) {
              const cardId = this.getAttribute("data-id");
              if (cardId) {
                window.location.assign(
                  `http://127.0.0.1:5500/Public/details.html?id=${cardId}`
                );
              }
            });
          });
      });
    }
  );
});
