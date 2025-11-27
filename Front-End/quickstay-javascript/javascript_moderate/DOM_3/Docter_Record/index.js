let form = document.querySelector("form");
let name = document.getElementById("name");
let id = document.getElementById("id");
let specialization = document.getElementById("specialization");
// console.log(specialization);
let experience = document.getElementById("experience");
let email = document.getElementById("email")
let mo = document.getElementById("mobile");
let tbody = document.querySelector("tbody");

form.addEventListener("submit",getData)

let doc_data = [];

function getData(){

  event.preventDefault();
  let doc_obj = {
  name: name.value,
  id: id.value,
  specialization: specialization.value,
  experience: experience.value,
  email: email.value,
  mo: mo.value

  }
  // console.log(doc_obj);
  
  doc_data.push(doc_obj);
  display(doc_data)
  // console.log(doc_data);

}

function display(data) {
  tbody.innerHTML = "";

  data.map(function(el){
    let row =  document.createElement("tr");

    let col1 = document.createElement("td");
    col1.innerText = el.name;

    let col2 = document.createElement("td");
    col2.innerText = el.id;

    let col3 = document.createElement("td");
    col3.innerText = el.specialization;

    let col4 = document.createElement("td");
    col4.innerText = el.experience;

    let col5 = document.createElement("td");
    col5.innerText = el.email;

    let col6 = document.createElement("td");
    col6.innerText = el.mo;

    let col7 = document.createElement("td");
    if (el.experience > 5) {
      el.role = "Senior";
    } else if (el.experience >= 2 && el.experience <= 5) {
       el.role = "junier";
    } else if (el.experience <= 1) {
      el.role = "trainee";
    }
    col7.innerText = el.role;
    // console.log(col7);
    
   
    let col8 = document.createElement("td");
    col8.addEventListener("click", delfun);
    col8.innerText = "Delete";
    col8.style.backgroundColor = "red";
    col8.style.color = "white";
    
    
    row.append(col1, col2, col3, col4, col5, col6, col7, col8);
    tbody.append(row);
    
  });

  
}

function delfun (){
  event.target.parentNode.remove()
  // display(doc_data)
}