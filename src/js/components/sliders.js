import Swiper, { Autoplay, Pagination, Navigation, Thumbs } from 'swiper';
import { throttle } from '../functions/throttle';

Swiper.use([Autoplay, Pagination, Navigation, Thumbs]);

function initMobileSlider(parent, wrapper, items, breakpoint = 1024, options) {
  if (!options) {
    options = {
      spaceBetween: 10,
    };
  }

  let swiper = null;

  function init() {
    const $parent = document.querySelector(parent);

    if(!$parent) return;
    
    const $wrapper = $parent.querySelector(wrapper);
    const $items = $wrapper.querySelectorAll(items);

    if (
      window.innerWidth <= breakpoint &&
      !$parent.classList.contains('swiper')
    ) {
      $parent.classList.add('swiper');
      $wrapper.classList.add('swiper-wrapper');
      $items.forEach((slide) => slide.classList.add('swiper-slide'));

      swiper = new Swiper(parent, options);
    } else if (
      window.innerWidth > breakpoint &&
      $parent.classList.contains('swiper')
    ) {
      swiper?.destroy();
      
      $parent.classList.remove('swiper');
      $wrapper.classList.remove('swiper-wrapper');
      $items.forEach((slide) => slide.classList.remove('swiper-slide'));
    }
  }

  let throttledInit = throttle(init);

  window.addEventListener('resize', throttledInit); 

  init();
  return swiper;
}

initMobileSlider('.hero__benefits', '.hero__cards', '.hero__card', 760, {
    spaceBetween: 10,
    loop: true,
    speed: 3000,
    slidesPerView: 'auto',
    allowTouchMove: false,
    noSwiping: true,
    autoplay: {
      delay: 0,
    },
});
initMobileSlider('.privacy__list-wrapper', '.privacy__list', '.privacy__item', 768, {
  spaceBetween: 30,
  pagination: {
    clickable: true,
    el: '.swiper-pagination'
  }
});
initMobileSlider('.team__footer-wrapper', '.team__footer', '.team__col', 768, {
  spaceBetween: 8,
  slidesPerView: 'auto'
});
initMobileSlider('.articles__slider', '.blog-posts', '.articles__slider-item', 1024, {
  spaceBetween: 30,
  pagination: {
    clickable: true,
    el: '.swiper-pagination'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 'auto',
    },
  }
})

const aboutThumbs = initMobileSlider('.about__tabs-wrapper', '.about__tabs', '.about__tabs li', 1024, {
  slidesPerView: 'auto'
});

const aboutSllider = initMobileSlider('.about__content-wrapper', '.about__content', '.about__item', 1024, {
  spaceBetween: 30,
  thumbs:{
    swiper: aboutThumbs
  },
  pagination: {
    clickable: true,
    el: '.swiper-pagination'
  }
});
const reviewsSlider = new Swiper('.reviews__slider .swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  centeredSlidesBounds: true,
  initialSlide: 1,
  pagination: {
    clickable: true,
    el: '.reviews__slider .swiper-pagination'
  },
  navigation: {
    prevEl: '.reviews__button-prev',
    nextEl: '.reviews__button-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    }
  }
})
