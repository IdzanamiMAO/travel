const menuIcon = document.querySelector('.nav');
const navbar = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.mobile-menu');
const exit = document.querySelector('.mobile-nav__item');

menuIcon.addEventListener('click', () => {
  navbar.classList.add("change");
  overlay.classList.add("active");
});

overlay.addEventListener('click', () => {
  navbar.classList.remove("change");
  overlay.classList.remove("active");
});


const login = document.querySelector('.button__login');
const popUp = document.querySelector('.login__pop-up');

login.addEventListener('click', () => {
  popUp.classList.toggle("visible");
});




