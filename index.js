const menuIcon = document.querySelector('.nav');
const navbar = document.querySelector('.mobile-nav');
const overlayMob = document.querySelector('.mobile-menu__container');

menuIcon.addEventListener('click', () => {
  navbar.classList.add("change");
  overlayMob.classList.add("active");
});

overlayMob.addEventListener('click', () => {
  navbar.classList.remove("change");
  overlayMob.classList.remove("active");
});



/* ---------- Login pop up / Sign up pop up ---------- */
const login = document.querySelector('.button__login');
const account = document.querySelector('.account');
const popUp = document.querySelector('.login__pop-up');
const overlayPopup = document.querySelector('.pop-up__container');

login.addEventListener('click', () => {
  popUp.classList.add("visible");
  overlayPopup.classList.add("active");
});

account.addEventListener('click', () => {
  popUp.classList.add("visible");
  overlayPopup.classList.add("active");
});

overlayPopup.addEventListener('click', (e) => {
  if(e.target.classList.contains('pop-up__container')) {
    popUp.classList.remove("visible");
    overlayPopup.classList.remove("active");
  };
});

const register = document.querySelector('.register');
function reg(e) { //функция перестраивает поп-ап входа на поп-ап создание аккаунта и обратно
  const changeCaption = document.querySelector('.login__caption');
  const toggleButton = document.querySelector('.toggle');
  const changeSignIn = document.querySelector('.form__button');
  const removeForgot = document.querySelector('.forgot');
  const changeAccount = document.querySelector('.an-account');
  const changeRegister = document.querySelector('.register');

  if(e.target.textContent == "Register") { // перестраивает поп-ап входа на поп-ап создание аккаунта*/
    changeCaption.innerHTML = "Create account";
    toggleButton.classList.add("remove");
    changeSignIn.value = "Sign Up";
    removeForgot.classList.add("remove");
    changeAccount.innerHTML = "Already have an account? ";
    changeRegister.innerHTML = "Log in";
  } else { // перестраивает поп-ап создания аккаунта на поп-ап входа
    changeCaption.innerHTML = "Log in to your account";
    toggleButton.classList.remove("remove");
    changeSignIn.value = "Sign In";
    removeForgot.classList.remove("remove");
    changeAccount.innerHTML = "Don&prime;t have an account? ";
    changeRegister.innerHTML = "Register";
  }
}

register.addEventListener('click', (e) => {
  reg(e);
});



/* ---------- при нажатии Sign In показывается браузерный алерт с введенными данными ---------- */
const signIn = document.querySelector('.form__button');
const formElement = document.getElementById('form'); // извлекаем элемент формы
formElement.addEventListener('submit', (e) => { //отмена дефолтной перезагрузки браузера после нажатия на кнопку формы
  e.preventDefault();
});

signIn.addEventListener('click', () => {
  const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
  // теперь можно извлечь данные
  const email = formData.get('email');
  const password = formData.get('password');
  alert(`email: ${email}\npassword: ${password}`);
});



/*
Слайдер изображений в секции destinations +50
на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели (например если нажать правую картинку та что была в центре уезжает налево, а та что была видна наполовину оказывается справа). Слайдер может быть как конечным так и бесконечным - данный критерий не должен влиять на оценку + 20
Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20
Анимации плавного перемещения для слайдера +10*/

/* ---------- Слайдер изображений в секции destinations ---------- */
