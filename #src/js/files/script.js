document.addEventListener('DOMContentLoaded', function () {
	setTimeout(function () {
		document.querySelector('body').classList.add('loaded');
	}, 1000);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
	});
});
