import { initTabsFade, initTabsSimple } from "../functions/tabs";
import { throttle } from "../functions/throttle";

init();
initTabsFade('.work__tab', '.work__tabs-content');
initTabsFade('.team__item', '.team__box');
initTabsFade('.about__tabs li', '.about__item', false, true, 1024);
initTabsSimple('.plans__radio', '.plans__price');

window.addEventListener('resize', throttle(init));

function init() {
	if (window.innerWidth <= 1024) {
		document.querySelector('.team__item.is-active')?.classList.remove('is-active');
		document.querySelector('.team__box.is-active')?.classList.remove('is-active');

		const aboutItems = document.querySelectorAll('.about__item');
		aboutItems.forEach(item => {
			item.style.opacity = '';
		});
	}  else {
		const aboutActive = document.querySelector('.about__item.is-active');
		if (aboutActive) {
			aboutActive.style.opacity = 1;
		}
	}
}
