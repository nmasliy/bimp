const btn = document.querySelector('.directions__btn');

btn?.addEventListener('click', (e) => {
	btn.closest('.directions__inner').classList.add('is-expanded');
})