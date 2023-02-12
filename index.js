const menuIcon = document.querySelector('.nav');
const navbar = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click', () => {
  navbar.classList.add("change");
   overlay.classList.add("active");
});

 overlay.addEventListener('click', () => {
  navbar.classList.remove("change");
  overlay.classList.remove("active");
});




/* ---------- Login pop up / Sign up pop up ---------- */
const login = document.querySelector('.button__login');
const popUp = document.querySelector('.login__pop-up');

login.addEventListener('click', () => {
  popUp.classList.toggle("visible");

  document.addEventListener('click', e => {
    if(!login.contains(e.target)) {
      popUp.classList.remove("visible");
    };
  })
});

const register = document.querySelector('.register');

register.addEventListener('click', (e) => {
  const changeCaption = document.querySelector('.login__caption');
  const toggleButton = document.querySelector('.toggle');
  const changeSignIn = document.querySelector('.form__button');
  const removeForgot = document.querySelector('.forgot');
  const changeAccount = document.querySelector('.account');
  const changeRegister = document.querySelector('.register');

  if(e.target.textContent == "Register") { /* перестраивает поп-ап входа на поп-ап создание аккаунта*/
    changeCaption.innerHTML = "Create account";
    toggleButton.classList.add("remove");
    changeSignIn.value = "Sign Up";
    removeForgot.classList.add("remove");
    changeAccount.innerHTML = "Already have an account? ";
    changeRegister.innerHTML = "Log in";
  } else { /* перестраивает поп-ап создания аккаунта на поп-ап входа*/
    changeCaption.innerHTML = "Log in to your account";
    toggleButton.classList.remove("remove");
    changeSignIn.value = "Sign In";
    removeForgot.classList.remove("remove");
    changeAccount.innerHTML = "Don&prime;t have an account? ";
    changeRegister.innerHTML = "Register";
  }
});

