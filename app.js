const hamburgers = document.getElementById("hamburger");
const navUl = document.getElementById("nav-lu");
hamburgers.addEventListener("click", ()=>{
      navUl.classList.toggle("show");
});

function myFunction(x) {
  x.classList.toggle("change");
}function myFunction(x) {
  x.classList.toggle("change");
}

const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector(".header");

hamburger.addEventListener("click", ()=> {
navLinks.classList.toggle("open");
});