let header = document.querySelector("header");
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');

let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');


let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let phBtn = document.querySelectorAll('.ph-btn');



window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    
}
window.addEventListener("scroll", function () { 
   if (window.scrollY >= 200) {   
       header.classList.add("active"); 
       goToBtn.classList.add("active"); 
   } else { 
       header.classList.remove("active");
       goToBtn.classList.remove("active");
   }
});
window.addEventListener("scroll", () => {
   if (window.scrollY > 50) {  
               
       header.classList.add("scrolled");
   } else {
               
       header.classList.remove("scrolled");
   }
});


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
