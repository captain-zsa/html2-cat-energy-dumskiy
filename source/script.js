let navMain = document.querySelector('.main-header__navigation');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header__navigation--nojs');
navToggle.classList.remove('main-header__toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__navigation--closed')) {
    navMain.classList.remove('main-header__navigation--closed');
    navMain.classList.add('main-header__navigation--opened');
  } else {
    navMain.classList.add('main-header__navigation--closed');
    navMain.classList.remove('main-header__navigation--opened');
  }
});
