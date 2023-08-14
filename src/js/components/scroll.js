import SmoothScroll from 'smooth-scroll';
import { throttle } from '../functions/throttle';

const scroll = new SmoothScroll('a[href*="#"]', {
  speedAsDuration: true,
  duration: 500,
});

const arrowUp = document.querySelector('.arrow-up');

if (arrowUp) {
  const article = document.querySelector('.article');
  let offset = 200;

  
  function update() {
    const trigger = article ? article.offsetHeight + article.offsetTop - (window.innerHeight - offset)
    : window.innerHeight;

    if (window.pageYOffset >= trigger) {
      arrowUp.classList.add('is-active');
    } else {
      arrowUp.classList.remove('is-active');
    }
  }

  arrowUp.addEventListener('click', function () {
    scroll.animateScroll(document.querySelector('.header'));
  });

  window.addEventListener('scroll', throttle(update));
}
