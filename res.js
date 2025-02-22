let header = document.querySelector("header");
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');

// end change
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
    // this for header to make sticky on scrolling
    //header.classList.toggle('sticky', window.scrollY>0);
}
window.addEventListener("scroll", function () { 
   if (window.scrollY >= 200) {   // لو المسافة (الاسكرول)اكبر من او تساوي200 بكسل الهيدر هيظهر ثابت طول الصفحة لحد لما ارجع ل200 بكسل تاني
       header.classList.add("active"); 
       goToBtn.classList.add("active"); // الزرار مش هيظهر غير لما الهيدر ينزل مع الصفحة لاني قبل الهيدر ما ينزل مفيش حاجة فوق فالصفحة تستدعي اني اطلع اشوفها واضغط ع السهم 
   } else { // لو الاسكرول اقل من 200 بكسل مش هيظهر الهيدر ولا الزرار 
       header.classList.remove("active");
       goToBtn.classList.remove("active");
   }
});
window.addEventListener("scroll", () => {
   if (window.scrollY > 50) {  
               // عندما يتم التمرير أكثر من 50 بكسل
       header.classList.add("scrolled");
   } else {
               // إزالة الكلاس عند العودة للأعلى
       header.classList.remove("scrolled");
   }
});


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

