
let api_key = "AIzaSyCqLqYFFoqDUvXTHh8iPDW8ya64eFowGgk";
let api = "https://youtube.googleapis.com/youtube/v3/search?part=snippet";
let search = document.getElementById("search");
let main = document.getElementById("main");

const getData = async () => {
  let res = await fetch(`${api}&q=${search.value}&key=${api_key}`);
  let data = await res.json();
  Display(data.items); 
};

const Display = (data) => {
  main.innerHTML = ""; 

  data.map(({ id: { videoId }, snippet }) => {
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
  

    let name = document.createElement("h2");
    name.innerText = snippet.title;

    let div = document.createElement("div");
    div.append(iframe, name);
    main.append(div);
  });
};

const delay = () => {
  setTimeout(getData, 2000);
};
