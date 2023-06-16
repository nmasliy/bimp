import { throttle } from './throttle';

export function moveElementOnBreakpoint(
  movedSelector,
  { fromSelector, fromPosition = 'beforeend' },
  { toSelector, toPosition = 'beforeend' },
  breakpoint = 1200) {

  const movedNode = document.querySelector(movedSelector);

  if (!movedNode) return;

  const fromNode = document.querySelector(fromSelector);
  const toNode = document.querySelector(toSelector);

  let isMoved = false;

  function move() {
    if (window.innerWidth <= breakpoint) {
      if (!isMoved) {
        toNode.insertAdjacentElement(toPosition, movedNode);
        isMoved = true;
      }
    } else {
      if (isMoved) {
        fromNode.insertAdjacentElement(fromPosition, movedNode);
        isMoved = false;
      }
    }
  }

  window.addEventListener('resize', throttle(move));

  move();
}
