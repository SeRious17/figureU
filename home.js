const themeToggler = document.querySelector(".toggle");
const sidebar = document.querySelector("aside");
const closebtn =document.querySelector("#close-btn");
const menubtn = document.querySelector('#menu-btn');
//change theme
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');  
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');  
})
menubtn.addEventListener('click',()=>{
    sidebar.style.display='block';
})
closebtn.addEventListener('click',()=>{
    sidebar.style.display='none';
})