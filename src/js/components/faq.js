import scrollWithOffset from '../functions/scrollWithOffset';

const btn = document.querySelector('.faq__btn');
const items = document.querySelectorAll('.faq__item');

btn.addEventListener('click', (e) => {
	btn.closest('.faq__inner').classList.add('is-expanded');
})

items.forEach(item => {
	const text = item.querySelector('.faq__content');

	if (item.classList.contains('is-active')) {
		text.style.maxHeight = text.scrollHeight + 'px'; 
	}

	// if (window.innerWidth <= 1024) {
	// 	item.classList.add('is-mobile');
	// 	text.style.maxHeight = '';
	// } 

	item.addEventListener('click', () => {
		const active = document.querySelector('.faq__item.is-active');
		const activeText = active?.querySelector('.faq__content');

		if (!active) {
			item.classList.add('is-active');
			text.style.maxHeight = text.scrollHeight + 'px'; 
			return;
		}

		if (active == item) {
			active.classList.remove('is-active');
			activeText.style.maxHeight = ''; 
			return;
		}

		active.classList.remove('is-active');

		activeText.style.maxHeight = ''; 
		text.style.maxHeight = text.scrollHeight + 'px'; 

		item.classList.add('is-active');

		if (window.innerWidth <= 1024) {
			// scrollWithOffset(item, 10);
		}
		

	})
})