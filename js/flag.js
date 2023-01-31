localStorage.clear();

const langGe = document.querySelector('.flag-ge');
const langRu = document.querySelector('.flag-ru');

langGe.addEventListener('click', () => {
	localStorage.setItem('hash', 'ge');
});

langRu.addEventListener('click', () => {
	localStorage.setItem('hash', 'ru');
});

