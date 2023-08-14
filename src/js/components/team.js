const btn = document.querySelector('.team__btn-more');

btn?.addEventListener('click', (e) => {
	btn.closest('.team__inner').classList.add('is-expanded');
})
