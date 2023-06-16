import scrollWithOffset from '../functions/scrollWithOffset';

const buttons = document.querySelectorAll('.plans__body-more');

buttons.forEach(btn => {
	btn.addEventListener('click', (e) => {
		let textShow = btn.dataset.showText;
		let textHide = btn.dataset.hideText;

		const active = document.querySelector('.plans__item.is-active');
		const item = btn.closest('.plans__item');

		if (active && active != item) {
			active.classList.remove('is-active');
			active.querySelector('.plans__body-more').textContent = textShow;
		}

		
		if (item.classList.contains('is-active')) {
			item.classList.remove('is-active')
			btn.textContent = textShow;
		} else {
			item.classList.add('is-active')
			btn.textContent = textHide;
		}
		scrollWithOffset(item);
	})
})