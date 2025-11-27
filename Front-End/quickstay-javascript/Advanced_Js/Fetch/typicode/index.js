let api = "https://jsonplaceholder.typicode.com/posts";
let main = document.getElementById("main");
// console.log(api);

const getData = async()=>{

    let res = await fetch(api);
    // console.log(res);
    let data = await res.json();
    console.log(data);
    
   
Display(data)
}
// getData();


const delay =()=>{
    setTimeout (getData, 2000)
}
// console.log(getData);
delay()


const Display = (data)=>{
   data.map(({ id, title }) => {
     let Id = document.createElement("h1");
     Id.innerText = id;
     let Title = document.createElement("h2");
     Title.innerText = title;

     let div = document.createElement("div");
     div.append(Id, Title);
     main.append(div);
   });
   
} 