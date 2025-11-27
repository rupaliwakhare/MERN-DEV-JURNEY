let form = document.querySelector("form");
let name = document.getElementById("name");
let id = document.getElementById("id");
let depart = document.getElementById("depart");
let experience = document.getElementById("experience");
let mail = document.getElementById("mail");
let no = document.getElementById("no");
let tbody = document.querySelector("tbody");

form.addEventListener("submit", getData);

let Emp_data = [];

function getData() {
  event.preventDefault();

  let Emp_obj = {
    name: name.value,
    id: id.value,
    depart:depart.value,
    experience: experience.value,
    mail: mail.value,
    no: no.value,
  };
  console.log(Emp_obj);

  Emp_data.push(Emp_obj);
  display(Emp_data)
//   console.log(Emp_data);
}

function display(data) {
  tbody.innerHTML = "";

  data.map(function (el) {
    let row = document.createElement("tr");
    // console.log(row);
    let col1 = document.createElement("td");
    col1.innerText = el.name;

    let col2 = document.createElement("td");
    col2.innerText = el.id;

    let col3 = document.createElement("td");
    col3.innerText = el.depart;

    let col4 = document.createElement("td");
    col4.innerText = el.experience;

    let col5 = document.createElement("td");
    col5.innerText = el.mail;

    let col6 = document.createElement("td");
    col6.innerText = el.no;
    // console.log(col6);
    

    let col7 = document.createElement("td");
    if (el.experience > 5) {
      el.role = "Senior";
      col7.style.color = "green"
    } else if (el.experience >= 2 && el.experience <= 5) {
      el.role = "junier";
      col7.style.color = "orange"
    } else if (el.experience <= 1) {
      el.role = "Fresher";
      col7.style.color = "purple"
    }
    col7.innerText = el.role;
    // console.log(col7);

    let col8 = document.createElement("td");
    col8.addEventListener("click", delfun);
    col8.innerText = "Delete";
    // col8.style.backgroundColor = "red";
    col8.style.color = "red";
    col8.style.cursor = "pointer"

    row.append(col1, col2, col3, col4, col5, col6, col7, col8);
    // console.log(row);
    tbody.append(row);
    
  });
}

function delfun() {
  event.target.parentNode.remove();
//   display(doc_data)
}
