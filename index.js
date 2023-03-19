const menuIcon = document.querySelector('.nav');
const navbar = document.querySelector('.mobile-nav');
const overlayMob = document.querySelector('.mobile-menu__container');

menuIcon.addEventListener('click', () => {
  if(window.innerWidth <= 550) {
    navbar.classList.add("change");
    overlayMob.classList.add("active");
  };
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

/* const slider = document.querySelector('.slider__list'); // сам слайдер, обертка для картинок
let sliderItems = [...document.querySelectorAll('.slider__item')]; //собирает в массив карточки (мутирует из-за фунуции right)

function right() { //функция создает слайд в конце (копируется все, кроме id)
  const newItem = document.createElement("div");
  newItem.className = 'slider__item';
  newItem.innerHTML = sliderItems[0].innerHTML; //добавляет сожержимое первого элемента созданному элементу
  slider.appendChild(newItem); //добавляет его в пул слайдера
  console.log('sliderItems function right()', sliderItems); //3 элемента
};

function left() { //функция создает слайд в начале (копируется все, кроме id) из-за пуша в начало массива косо работает анимация
  const newItem = document.createElement("div");
  newItem.className = 'slider__item';
  newItem.innerHTML = sliderItems[2].innerHTML; //добавляет сожержимое последнего элемента созданному элементу
  slider.insertBefore(newItem, slider.firstChild); //добавляет его в пул слайдера
  console.log('sliderItems function left()', sliderItems); //3 элемента
};

const moveRight = () => {
  slider.classList.add('transition-right');
  previous.removeEventListener('click', moveLeft); // отключение стрелок на время анимации (можно еще цвет делать неактивный)
  next.removeEventListener('click', moveRight); // отключение стрелок на время анимации (можно еще цвет делать неактивный)
  right();
};

const moveLeft = () => {
  slider.classList.add('transition-left');
  previous.removeEventListener('click', moveLeft); // отключение стрелок на время анимации (можно еще цвет делать неактивный)
  next.removeEventListener('click', moveRight); // отключение стрелок на время анимации (можно еще цвет делать неактивный)
  left()
};

const next = document.querySelector('#item-next');
const previous = document.querySelector('#item-previous');

next.addEventListener('click', () => {
  moveRight();
});

previous.addEventListener('click', () => {
  moveLeft();
});


slider.addEventListener('animationend', (animationEven) => {
  //let changedItem;
  if (animationEven.animationName === 'move-right') {
    slider.classList.remove('transition-right');

    console.log('sliderItems slider.addEventListener', sliderItems);




    //changedItem = next;
    //slider.classList.remove('transition-left');
    //document.querySelector('#item-current').innerHTML = next.innerHTML;

  } else {
    slider.classList.remove('transition-left');

    // в созданный в left() элемент

    //changedItem = previous
    //document.querySelector('#item-current').innerHTML = previous.innerHTML;
  }

  //const sliderItem1 = createItemTemplate(); // сомнительно. по идее здесь надо генерировать новый элемент (с новой картинкой и названием страны), но я хочу просто откуда-то копировать.
  //sliderItem1.innerHTML = document.querySelector('#item-next').innerHTML; // копирую из item-next в созданный элемент, будет работать только для левой анимации, т.к. для правой надо копировать из item-previous

  //changedItem.innerHTML = ''; // обнуляю то, что записано в переменную
  //changedItem.appendChild(sliderItem1); // помещаю вот то, что генерировала раньше в переменную

  previous.addEventListener('click', moveLeft);
  next.addEventListener('click', moveRight);
}); */


/*const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
const slider = document.querySelector('.slider__list');

const moveLeft = () => {
  slider.classList.add('transition-left');
  btnLeft.removeEventListener('click', moveLeft); // отключение стрелок на время анимации (можно еще цвет делать неактивный)
  btnRight.removeEventListener('click', moveRight); // отключение стрелок на время анимации (можно еще цвет делать неактивный)
};

const moveRight = () => {
  slider.classList.add('transition-right');
  btnLeft.removeEventListener('click', moveLeft);
  btnRight.removeEventListener('click', moveRight);
};

btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);


const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right');

const createItemTemplate = () => { // сомнительно. по идее здесь надо генерировать новый элемент (с новой картинкой и названием страны), но я хочу просто откуда-то копировать.
  const sliderItem = document.createElement("div");
  sliderItem.classList.add('slider__item');
  return sliderItem;
}


slider.addEventListener('animationend', (animationEven) => {
  let changedItem;
  if (animationEven.animationName === 'move-left') {
    slider.classList.remove('transition-left');
    changedItem = ITEM_LEFT
    document.querySelector('#item-active').innerHTML = ITEM_LEFT.innerHTML;
  } else {
    slider.classList.remove('transition-right');
    changedItem = ITEM_RIGHT;
    slider.classList.remove('transition-left');
    document.querySelector('#item-active').innerHTML = ITEM_RIGHT.innerHTML;
  }

  const sliderItem1 = createItemTemplate();
  sliderItem1.innerHTML = document.querySelector('#item-right').innerHTML; // копирую из item-right в созданный элемент, будет работать только для левой анимации, т.к. для правой надо копировать из item-left

  changedItem.innerHTML = ''; // обнуляю то, что записано в переменную
  changedItem.appendChild(sliderItem1); // помещаю вот то, что генерировала раньше в переменную

  btnLeft.addEventListener('click', moveLeft);
  btnRight.addEventListener('click', moveRight);
}) */