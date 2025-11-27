let api = "http://localhost:3000/data";
let product_list = document.getElementById("product_list")

const getData = async()=>{
    let res = await fetch(api)
    // console.log(res);
    let data = await res.json()
    // console.log(data);
    
    display(data)
}
getData();


const display = (data) => {
  product_list.innerHTML = "";
  data.map((el) => {
    let div = document.createElement("div");

    let title = document.createElement("h1");
    title.innerText = el.title;

    let img = document.createElement("img");
    img.src = el.image
    let price = document.createElement("h2");
    price.innerText = el.price;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.addEventListener("click", () => {
      delfun(el.id);
    });

    let updatebnt = document.createElement("button");
    updatebnt.innerText = "Edit";
    updatebnt.addEventListener("click", () => {
      updatefun(el.id, el.title, el.image, el.price); 
    });

    let editDiv = document.createElement("div");
    editDiv.setAttribute("id", `editDiv-${el.id}`);

    div.append(img, title, price, updatebnt, delbtn, editDiv);
    product_list.append(div);
  });
};


// add functionality

const AddProduct = () => {
//   console.log("hello");
let title = document.getElementById("name").value
let price = document.getElementById("price").value
let image = document.getElementById("img").value

fetch(api,{
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify({image,title,price: parseInt(price)}),

})

.then(()=>getData())
.catch((err)=>console.log(err));
};


// Delete functionality

async function delfun(id) {
    fetch(`${api}/${id}`,{
      method:"DELETE"
    })
    .then(()=>{
      getData()
    }).catch((err)=>{
      console.log(err);
      
    })
    
}
// update form

const updatefun = (id,title,img,price)=>{
  console.log(id,title,img,price);
  let editDiv = document.getElementById(`editDiv-${id}`)
  
  // console.log(editDiv);
  editDiv.innerHTML = `
  <input type="text" id="update_img" value="${img}">
  <br>
  <input type="text" id="update_Title" value="${title}">
 <br>
  <input type="text" id="update_price" value="${price}">
  <br>
  <button onclick="editfun('${id}')">Update</button>
  `;
  
  
}
// console.log(updatefun);

// edit 

const editfun = (id)=>{
  // console.log(id);
  let title = document.getElementById("update_Title").value
  let image = document.getElementById("update_img").value
  let price = document.getElementById("update_price").value

  let editDiv = document.getElementById(`editDiv-${id}`);

  fetch(`${api}/${id}`,{
    method:"PATCH",
    headers: {"Content-Type": "application/json"},
    body:JSON.stringify({image,title,price:parseInt(price)}),
  })

.then(()=>{

  if(editDiv){
    editDiv.innerHTML=""
  }

  getData()})

  .catch((err)=>{
    console.log(err);
    
  })

}

