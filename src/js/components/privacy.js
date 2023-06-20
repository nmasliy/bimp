const items = document.querySelectorAll('.privacy__item');

items.forEach(item => {
	const text = item.querySelector('.privacy__text');

	if (item.classList.contains('is-active')) {
		text.style.maxHeight = text.scrollHeight + 'px'; 
	}

	item.addEventListener('click', () => {
		if (window.innerWidth <= 768) return;

		const active = document.querySelector('.privacy__item.is-active');
		const activeText = active?.querySelector('.privacy__text');

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
	})
})
