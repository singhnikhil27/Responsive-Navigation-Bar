

let btn = document.querySelector('#menu-bar');
let nav = document.querySelector('.nav');

btn.addEventListener('click',()=>{
    btn.classList.toggle('fa-times');
    nav.classList.toggle('nav-toggle');
});

