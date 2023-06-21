import scrollWithOffset from '../functions/scrollWithOffset';
import { throttle } from '../functions/throttle';

const buttons = document.querySelectorAll('.plans__body-more');

window.addEventListener('resize', throttle(resetHeight));

buttons.forEach(btn => {
	btn.addEventListener('click', (e) => {
		let textShow = btn.dataset.showText;
		let textHide = btn.dataset.hideText;

		const active = document.querySelector('.plans__item.is-active');
		const item = btn.closest('.plans__item');
		const text = item.querySelector('.plans__body-info');
		const activeText = active?.querySelector('.plans__body-info');

		if (active && active != item) {
			active.classList.remove('is-active');
			active.querySelector('.plans__body-more').textContent = textShow;
			activeText.style.maxHeight = ''; 
		}

		if (item.classList.contains('is-active')) {
			item.classList.remove('is-active')
			btn.textContent = textShow;
			activeText.style.maxHeight = ''; 
		} else {
			item.classList.add('is-active')
			text.style.maxHeight = text.scrollHeight + 'px'; 
			btn.textContent = textHide;
		}

		scrollWithOffset(item);
	})
})

function resetHeight() {
	const active = document.querySelector('.plans__item.is-active');
	const activeText = active?.querySelector('.plans__body-info');

	if (active && window.innerWidth > 768) {
		active.classList.remove('is-active');
		activeText.style.maxHeight = ''; 
	}

}