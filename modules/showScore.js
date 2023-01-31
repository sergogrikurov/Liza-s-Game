const restartGame = document.querySelector('.restart-game');
let hash = localStorage.getItem('hash');

function showScore() {
	if (localStorage.getItem('score')) {
		const modal = document.querySelector('#modal');
		const modalText = document.querySelector('.modal__title');
		const userName = localStorage.getItem('name');
		if (hash == 'ge') {
			modalText.innerHTML = `
		ყოჩაღ <span class="winner-name">${userName}</span> საოცრება ხარ!!!`;
			restartGame.textContent = 'გადატვირთე';
		} else if (hash == 'ru') {
			modalText.innerHTML = `
		молодец <span class="winner-name">${userName}</span> ты умничка!!!`;
			restartGame.textContent = 'перезагрузи';
		}
		modal.classList.add('open');
		if (modalText) {
			modalText.addEventListener('click', () => {
				modal.classList.remove('open');
				restartGame();
			})
		}
	}
}

export default showScore;