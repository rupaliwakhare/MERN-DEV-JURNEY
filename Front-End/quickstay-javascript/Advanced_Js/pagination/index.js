let api = "https://jsonplaceholder.typicode.com/comments";
let div = document.getElementById("main");
let real_data;


const getData = async() =>{
    let res = await fetch (api);
    // console.log(res);
    let data = await res.json()
    // console.log(data);
 
    return data;
    
    // renderDom()

}
// getData()
const main =async()=>{
    real_data = await getData();
     renderDom(0);
     showButton()

}

main()


const renderDom = (index) =>{
    div.innerHTML = "";
    let start = 10*index;    //0
    let end = start+10  //10

    let pre_page_data = real_data.slice(start,end)
    pre_page_data.map(({id,name})=>{
        let p = document.createElement("p");
        p.innerText = `${id} ${name}`

        div.append(p)
    
})
showButton(index+1)

}


const showButton = (page) =>{
    let btn = document.getElementById("buttons");
    btn.innerHTML = "";
    let start = 1;

    if(page>4){
        start = page-1;
    }

    for(let i=start; i <= start+9; i++){
        let b = document.createElement("button")
        b.innerText = i;
        b.onclick = () =>{
            renderDom(i-1)
        }

        btn.append(b)
    }

}

// showbutton()