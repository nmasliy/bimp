import scrollWithOffset from '../functions/scrollWithOffset';

import { initTabs, initTabsFade } from "../functions/tabs";
import { throttle } from "../functions/throttle";

init();
initTabs('.work__tab', '.work__tabs-content');
initTabsFade('.team__item', '.team__box');

window.addEventListener('resize', throttle(init));


if (window.innerWidth > 1024) {
	initTabs('.about__tabs li', '.about__item');
}
else {
	initTabsFade('.management__item', '.management__img-item', () => {
		scrollWithOffset(document.querySelector('.management__inner'));
	}, false);
}

function init() {
	if (window.innerWidth <= 1024) {
		document.querySelector('.team__item.is-active')?.classList.remove('is-active')
		document.querySelector('.team__box.is-active')?.classList.remove('is-active')
	}  
}
