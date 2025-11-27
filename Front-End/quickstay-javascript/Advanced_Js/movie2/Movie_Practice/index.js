let api_key = "f4e3006f";
let api = "https://www.omdbapi.com/?i=tt3896198&apikey=f4e3006f";
// console.log(api_key);
let main = document.getElementById("main")
let input = document.getElementById("serchinput");
// console.log("input");
const getMovie = async()=>{
    let res = await fetch (`${api}&s=${input.value}`);
    let data =await res.json()
    console.log(data);
    let x = data.Search
    console.log(x);
    
    display(x)
};
// getMovie()

const delay=()=>{
    setTimeout(getMovie,3000)

};

const display = (movies)=>{
main.innerHTML=""
// console.log(movies);
movies.map((el)=>{
let div = document.createElement("div");

let title = document.createElement("h1");
title.innerText = el.Title;

let image = document.createElement("img");
image.src = el.Poster;

let year = document.createElement("h3");
year.innerText = el.Year

div.append(image,title,year);
main.append(div)
})
}






