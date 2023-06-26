const items = document.querySelectorAll('.management__item');

items.forEach(item => {
	const text = item.querySelector('.management__text');

	if (item.classList.contains('is-active')) {
		text.style.maxHeight = text.scrollHeight + 'px'; 
	}

	item.addEventListener('click', () => {
		const activeImg = document.querySelector('.management__img.is-active');
		const img = document.querySelector('.management__img[data-tabs="' + item.dataset.tabs + '"]');

		const active = document.querySelector('.management__item.is-active');
		const activeText = active?.querySelector('.management__text');

		if (!active) {
			item.classList.add('is-active');
			text.style.maxHeight = text.scrollHeight + 'px'; 
			return;
		}

		if (active == item) {
			if (window.innerWidth <= 1024) {
				active.classList.remove('is-active');
				activeText.style.maxHeight = ''; 
			}
			return;
		}
		

		if (window.innerWidth > 1024) {
			activeImg.classList.remove('is-active');
		}
		active.classList.remove('is-active');
		activeText.style.maxHeight = ''; 

		text.style.maxHeight = text.scrollHeight + 'px'; 
		item.classList.add('is-active');
		if (window.innerWidth > 1024) {
			img.classList.add('is-active');
		}
	})
})
