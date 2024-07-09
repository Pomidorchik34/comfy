import { getData } from "./functions.js";
let id = localStorage.getItem("id");
const main = document.querySelector(".main-cart");
function createCardCart(value) {
  console.log(value);
  return `<div class="container card">
          <h1 class="heading-cart">Shopping Cart</h1>
          <div class="outline"></div>
          <div class="cart">
            <div class="card">
              <img
                src="${value?.image}"
                alt=""
                width="128"
                height="128"
              />
              <div class="text-cart">
                <h1>${value?.title}</h1>
                <h1>${value?.company}</h1>
                <h1></h1>
              </div>
              <div class="Amo">
                <h1>Amount</h1>
                <select name="" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <button class="remove">remove</button>
              </div>
              <p class="price">${value?.price}</p>
            </div>
          </div>
        </div>`;
}
getData(`https://strapi-store-server.onrender.com/api/products/${id}`);
document.addEventListener("DOMContentLoaded", (event) => {
  let item = createCardCart(JSON.parse(id));
  console.log(item);
  main.innerHTML += item;
});
