let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
form.addEventListener("submit", getData);

let todo_arr = JSON.parse(localStorage.getItem("array")) || [];

display(todo_arr);

function getData() {
  event.preventDefault();

  let task = form.task.value;
  let priority = form.priority.value;

  let todo_obj = {
    task,
    priority,
  };

  todo_arr.push(todo_obj);
  localStorage.setItem("array", JSON.stringify(todo_arr));
  console.log(todo_arr);

  display(todo_arr);
}

function display(data) {
  tbody.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = data[i].task;
    let col2 = document.createElement("td");
    if (data[i].priority.toLowerCase() === "high") {
      col2.style.backgroundColor = "red";
    } else if (data[i].priority.toLowerCase() === "low") {
      col2.style.backgroundColor = "green";
    }

    col2.innerText = data[i].priority;
    let col3 = document.createElement("td");
    col3.addEventListener("click", deletevalue);
    col3.innerText = "Delete";
    row.append(col1, col2, col3);
    tbody.append(row);
  }
}

function deletevalue() {
  event.target.parentNode.remove();
}
