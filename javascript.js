const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

//Open|Closed menu functionality
menuBtn.addEventListener("click", () => {
menu.classList.toggle('nav-toggle');
});