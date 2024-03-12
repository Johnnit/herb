let ham = document.getElementById("bars");
let navLinks = document.querySelector(".nav-links");
ham.addEventListener("click",()=>{
  alert('help me');
  navLinks.classList.toggle("show");
})