let  slides = document.querySelectorAll(".slide");

let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === i);
  });
}

let prev = document.getElementById("prev")
prev.onclick= () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

let next = document.getElementById("next").onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

showSlide(index);
