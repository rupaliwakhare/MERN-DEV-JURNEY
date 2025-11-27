let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let product_name = document.getElementById("name");
let catagory = document.getElementById("catagory");
let brand = document.getElementById("brand");
let price = document.getElementById("price");
let delivered = document.getElementById("deliveredBy");

form.addEventListener("submit", getData);
let product_arr = [];
function getData() {
  event.preventDefault();
  // console.log("hello")

  let data = {
    name: product_name.value,
    catagory: catagory.value,
    brand: brand.value,
    price: price.value,
    delivered: delivered.value,
  };

  product_arr.push(data);
  console.log(product_arr);


  let row = document.createElement("tr");

  let col1 = document.createElement("td");
  col1.innerText = data.name;

  let col2 = document.createElement("td");
  col2.innerText = data.catagory;

  let col3 = document.createElement("td");
  col3.innerText = data.brand;

  let col4 = document.createElement("td");
  col4.innerText = data.price;

  let col5 = document.createElement("td");
  col5.innerText = data.delivered;

  let col6 = document.createElement("td");
  col6.innerText = "price segment";
  
  let col7 = document.createElement("td");
  col7.innerText = "Delete";

  row.append(col1, col2, col3, col4, col5, col6, col7);
  tbody.append(row);


}
