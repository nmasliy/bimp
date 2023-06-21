import { moveElementOnBreakpoint } from '../functions/move-element';

// moveElementOnBreakpoint(
//   '.header',
//   { fromSelector: '.page-wrapper', fromPosition: 'afterbegin' },
//   { toSelector: '.hero__body', toPosition: 'afterbegin' },
//   1200
// );
moveElementOnBreakpoint(
  '.header__nav ul',
  { fromSelector: '.header__nav', fromPosition: 'afterbegin' },
  { toSelector: '.burger-menu__nav', toPosition: 'afterbegin' },
  1200
);
moveElementOnBreakpoint(
  '.header__btn--1',
  { fromSelector: '.burger', fromPosition: 'afterend' },
  { toSelector: '.burger-menu__buttons', toPosition: 'afterbegin' },
  1200
);
moveElementOnBreakpoint(
  '.header__btn--2',
  { fromSelector: '.header__btn--1', fromPosition: 'afterend' },
  { toSelector: '.burger-menu__buttons', toPosition: 'afterbegin' },
  1200
);
moveElementOnBreakpoint(
  '.problems__img',
  { fromSelector: '.problems__left', fromPosition: 'afterbegin' },
  { toSelector: '.problems__subtitle', toPosition: 'afterend' },
  1024
);
moveElementOnBreakpoint(
  '.systems__row',
  { fromSelector: '.systems', fromPosition: 'beforeend' },
  { toSelector: '.systems__list', toPosition: 'beforeend' },
  500
);
moveElementOnBreakpoint(
  '.systems__last-1',
  { fromSelector: '.systems__list li:nth-last-child(3)', fromPosition: 'afterend' },
  { toSelector: '.systems__row', toPosition: 'afterbegin' },
  500
);
moveElementOnBreakpoint(
  '.systems__last-2',
  { fromSelector: '.systems__last-1', fromPosition: 'afterend' },
  { toSelector: '.systems__row', toPosition: 'beforeend' },
  500
);
moveElementOnBreakpoint(
  '.team__footer-wrapper',
  { fromSelector: '.team__wrapper', fromPosition: 'afterend' },
  { toSelector: '.team__title', toPosition: 'afterend' },
  768
);
moveElementOnBreakpoint(
  '.vacancies__title',
  { fromSelector: '.vacancies__info', fromPosition: 'afterbegin' },
  { toSelector: '.vacancies__images', toPosition: 'beforebegin' },
  1024
);
moveElementOnBreakpoint(
  '.vacancies__subtitle',
  { fromSelector: '.vacancies__title', fromPosition: 'afterend' },
  { toSelector: '.vacancies__title', toPosition: 'afterend' },
  1024
);
moveElementOnBreakpoint(
  '.support__img',
  { fromSelector: '.support__inner', fromPosition: 'beforeend' },
  { toSelector: '.support__subtitle', toPosition: 'afterend' },
  768
);
moveElementOnBreakpoint(
  '.footer__award',
  { fromSelector: '.footer__logo', fromPosition: 'afterend' },
  { toSelector: '.footer__socials-wrapper', toPosition: 'afterbegin' },
  1024
);


const teamItems = document.querySelectorAll('.team__item');

teamItems.forEach(el => {
  const id  = el.dataset.tabs;
  const itemSelector = '.team__item[data-tabs="' + id + '"]';
  const boxSelector = '.team__box[data-tabs="' + id + '"]';

  moveElementOnBreakpoint(
    boxSelector,
    { fromSelector: '.team__content', fromPosition: 'afterbegin' },
    { toSelector: itemSelector, toPosition: 'beforeend' },
    1024
  );
})

// const partnersItems = document.querySelectorAll('.hero__partners li');

// partnersItems.forEach((el, i) => {
//   const row  = el.dataset.row;
//   const itemSelector = '.hero__partners li:nth-child(' + (i + 1) + ')';

//   if (row) {
//     console.log(itemSelector)
//     moveElementOnBreakpoint(
//       itemSelector,
//       { fromSelector: '.hero__partners ul:nth-child(3)', fromPosition: 'afterbegin' },
//       { toSelector: '.hero__partners-row-1', toPosition: 'beforeend' },
//       1024
//     );
//   } else {
//     moveElementOnBreakpoint(
//       itemSelector,
//       { fromSelector: '.hero__partners ul:nth-child(3)', fromPosition: 'afterbegin' },
//       { toSelector: '.hero__partners-row-2', toPosition: 'beforeend' },
//       1024
//     );
//   }
  
  
// })