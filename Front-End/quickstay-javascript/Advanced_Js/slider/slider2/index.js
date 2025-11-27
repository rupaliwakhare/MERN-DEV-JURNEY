let slides = document.querySelectorAll(".slide");
let  dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === i);
    dots[idx].classList.toggle("active", idx === i);
  });
}

function autoSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(autoSlide, 2000); 

showSlide(index); 
