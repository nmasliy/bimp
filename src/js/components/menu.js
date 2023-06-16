import '../functions/mobile-100vh-fix';
import '../functions/header-height';
import Menu from '../functions/Menu';
import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll('a[href*="#"]', {
  speedAsDuration: true,
  duration: 500,
});

const menu = new Menu({
  menu: document.querySelector('.burger-menu'),
  burger: document.querySelector('.burger'),
  close: document.querySelector('.menu__close'),
  overlay: document.querySelector('.overlay'),
  navLinks: document.querySelectorAll('.header__nav li a'),
  burgerCaption: 'Открыть меню',
  burgerActiveCaption: 'Закрыть меню',
  transitionDelay: 400,
  breakpoint: 1200,
  onOpen: () => {
    document.querySelector('.header').classList.add('is-active');
    document.querySelector('.hero__body').classList.add('is-active');
  },
  onClose: () => {
    document.querySelector('.header').classList.remove('is-active')
    document.querySelector('.hero__body').classList.remove('is-active');
  }
});




const select = document.querySelector('.header__languages');

select.addEventListener('click', () => {
	select.classList.toggle('is-active');
});