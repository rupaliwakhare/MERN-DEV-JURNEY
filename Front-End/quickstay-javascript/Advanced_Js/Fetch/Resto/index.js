let api = "https://resta-server.onrender.com/categories";
let search = document.getElementById("search");
let main = document.getElementById("main")


const getData = async () => {
  let res = await fetch(api);
  let data = await res.json();
  console.log(data);
  Display(data)
};

const delay = () => {
  setTimeout(getData, 2000);
};


let Display = (data) => {

    data.map(({name,img,price})=>{

        let div = document.createElement("div")

         let Name = document.createElement("h1");
         Name.innerText = name;

         let image = document.createElement("img");
         image.src = img;

         let Price = document.createElement("h2");
         Price.innerText = "₹" + price;

         div.append(image,Name,Price)
         console.log(div);
         main.append(div);
         

    })
   
    
}