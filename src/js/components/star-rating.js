const stars = document.querySelectorAll('.js-rating li');

if (stars.length > 0) {
	stars.forEach((star, index1) => {
		star.addEventListener('click', () => {
			stars.forEach((star, index2) => {
				index1 >= index2
					? star.classList.add('star-rating__icon--fill')
					: star.classList.remove('star-rating__icon--fill');
			});
		});
	});
	
}

