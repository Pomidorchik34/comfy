import { getData } from "../src/functions.js";

function createDetails(value) {
  return `            <div class="container">
        <div class="links">
          <a href="">Home ></a> <a href="./index.html">Products</a>
        </div>
        <div class="mini-cont">
          <img
            class="img_details"
            src="${value.attributes.image}"
            alt=""
            width="512"
            height="384"
          />
          <div class="text__block">
            <h1 class="name-details">${value.attributes.title}</h1>
            <h4 class="company-details">${value.attributes.company}</h4>
            <p class="price-details">$${value.attributes.price / 100}</p>
            <p class="descrpition-details">${value.attributes.description}</p>
            <div class="colors">
              <h3>Colors</h3>
              <input type="radio" class="green" name="color" id="" />
              <input type="radio" class="blue" name="color" id="" />
            </div>
            <input type="number" class="amount"/>
            <button class="btn-details">ADD TO BAG</button>
          </div>
        </div>
      </div>`;
}
const main = document.querySelector(".main_details");

document.addEventListener("DOMContentLoaded", function () {
  let url = window.location.href;
  let id = url.split("id=")[1];

  if (!id) {
    window.location.assign("http://127.0.0.1:5500/Public/index.html");
    return;
  }
  getData(`https://strapi-store-server.onrender.com/api/products/${id}`)
    .then((data) => {
      console.log(data);
      let item = createDetails(data.data);
      main.innerHTML = item;
      const btn = document.querySelector(".btn-details");
      const amount = document.querySelector(".amount");
      btn.addEventListener("click", (event) => {
        let obj = {
          id: data.data.id,
          count: amount.value,
          image: data.data.attributes.image,
          title: data.data.attributes.title,
          company: data.data.attributes.company,
          color: data.data.attributes.color,
          price: data.data.attributes.price,
        };
        localStorage.setItem(`id`, JSON.stringify(obj));
        console.log(obj);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
