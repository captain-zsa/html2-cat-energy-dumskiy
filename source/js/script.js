let navMain = document.querySelector('.main-header__navigation');
let navToggle = document.querySelector('.main-header__toggle');
let mapInteractive = document.querySelector('.map__interactive');
let mapImage = document.querySelector('.map__image');

navMain.classList.remove('main-header__navigation--nojs');
navToggle.classList.remove('main-header__toggle--nojs');
mapInteractive.classList.remove('map__interactive--nojs');
mapImage.classList.remove('map__image--nojs');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('main-header__toggle--closed')) {
    navToggle.classList.remove('main-header__toggle--closed');
    navToggle.classList.add('main-header__toggle--opened');
    navMain.classList.remove('main-header__navigation--closed');
    navMain.classList.add('main-header__navigation--opened');
  } else {
    navToggle.classList.add('main-header__toggle--closed');
    navToggle.classList.remove('main-header__toggle--opened');
    navMain.classList.add('main-header__navigation--closed');
    navMain.classList.remove('main-header__navigation--opened');
  }
});
