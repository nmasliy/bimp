import { root } from "../_vars";
import { throttle } from './throttle';

const resizeHandler = () => {
  const headerHeight = document.querySelector('.header')?.offsetHeight;
  root.style.setProperty('--header-height', `${headerHeight}px`);
}

resizeHandler();

window.addEventListener('resize', throttle(resizeHandler));
