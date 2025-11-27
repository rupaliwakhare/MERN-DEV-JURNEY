let show_time = document.getElementById("show_time");
function display(){
let current_time=new Date
let hour=current_time.getHours();
let minute=current_time.getMinutes();
let second=current_time.getSeconds();
let time=`${hour}:${minute}:${second}`;
show_time.innerText=time
}

setInterval(display,1000)