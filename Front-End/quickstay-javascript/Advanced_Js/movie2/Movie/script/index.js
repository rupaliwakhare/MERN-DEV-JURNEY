let api_key = "f4e3006f";
let api = "https://www.omdbapi.com/?i=tt3896198&apikey=f4e3006f";
let input = document.getElementById("searchinput");
let container = document.getElementById("container");



const getMovie= async () => {
  let res = await fetch(`${api}&s=${searchinput.value}`);
  // console.log(res);
  let data = await res.json();
  console.log(data);
  console.log(searchinput.value);

  let x = data.Search;
  // console.log(x);
  display(x);
};


const delay = () => {
  setTimeout(getMovie,2000);
};

const display = (movies) => {
  // console.log(movies);

  movies.map((el) => {
    
    let div = document.createElement("div");

    let title = document.createElement("h2");
    // console.log(title);
    
    title.innerText = el.Title;

    let year = document.createElement("h5");
    // console.log(year);
    
    year.innerText = el.Year;


    let img = document.createElement("img");
    img.src = el.Poster;
    // console.log(img);
    
    
    div.append(img, title,year);
    container.append(div);
  });
};
