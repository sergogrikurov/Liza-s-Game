const restartGame = document.querySelector('.restart-game');
const empty = document.querySelector('.empty');
const buttons = document.querySelectorAll('.btn');
const rows = document.querySelectorAll('.row');
const allInputs = document.querySelectorAll('input[type="number"][maxlength]');

/*===================================================================*/

let hash = localStorage.getItem('hash');

/*===================================================================*/

allInputs.forEach(elem => {
	elem.oninput = function () {
		if (this.value.length > this.maxLength) {
			this.value = this.value.slice(0, this.maxLength);
		}
	}
});

/*===================================================================*/

let score = 0;
localStorage.setItem('score', score);
let mySet = new Set();

/*===================================================================*/

buttons.forEach((item) => {
	item.addEventListener('click', () => {
		setTimeout(resetAll, 1000);
	})
})

/*===================================================================*/

let c1 = 0;
function task1() {
	let a1 = randomInt(1, 20);
	let b1 = randomInt(1, 20);
	let a2 = 0;
	let b2 = 0;
	if (a1 >= b1) {
		a2 = a1;
		b2 = b1;
	} else {
		a2 = b1;
		b2 = a1;
	}
	document.querySelector('.row1 .a1').textContent = a2;
	document.querySelector('.row1 .a3').textContent = b2;
	c1 = a2 - b2;
}

task1();

document.querySelector('.b-1').addEventListener('click', (e) => {
	const data = +document.querySelector('.row1 .i').value;
	const input = document.getElementById('i-1');
	if (data == c1) {
		if (hash == 'ge') {
			empty.textContent = 'ყოჩაღ!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'молодец!!!';
		}
		mySet.add(1);
		localStorage.setItem('score', mySet.size)
		if (localStorage.getItem('score') == '10') {
			showScore();
		}
	} else if (data == '') {
		if (hash == 'ge') {
			empty.textContent = 'ჯერ ჩაწერე ციფრი!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'сперва введи цифру!!!';
		}
	} else if (data != c1 && data != '') {
		if (hash == 'ge') {
			empty.textContent = 'არასწორია!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'неправильно!!!';
		}
		input.value = '';
	}
});

let c2 = 0;
function task2() {
	let a1 = randomInt(1, 20);
	let b1 = randomInt(1, 20);
	let a2 = 0;
	let b2 = 0;
	if (a1 >= b1) {
		a2 = a1;
		b2 = b1;
	} else {
		a2 = b1;
		b2 = a1;
	}
	document.querySelector('.row2 .a1').textContent = a2;
	document.querySelector('.row2 .a3').textContent = b2;
	c2 = a2 - b2;
}
task2();

document.querySelector('.b-2').addEventListener('click', () => {
	const data = +document.querySelector('.row2 .i').value;
	const input = document.getElementById('i-2');
	if (data == c2) {
		if (hash == 'ge') {
			empty.textContent = 'ყოჩაღ!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'молодец!!!';
		}
		mySet.add(2);
		localStorage.setItem('score', mySet.size)
		if (localStorage.getItem('score') == '10') {
			showScore();
		}
	} else if (data == '') {
		if (hash == 'ge') {
			empty.textContent = 'ჯერ ჩაწერე ციფრი!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'сперва введи цифру!!!';
		}
	} else if (data != c2 && data != '') {
		if (hash == 'ge') {
			empty.textContent = 'არასწორია!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'неправильно!!!';
		}
		input.value = '';
	}
});

let c3 = 0;
function task3() {
	let a1 = randomInt(1, 20);
	let b1 = randomInt(1, 20);
	let a2 = 0;
	let b2 = 0;
	if (a1 >= b1) {
		a2 = a1;
		b2 = b1;
	} else {
		a2 = b1;
		b2 = a1;
	}
	document.querySelector('.row3 .a1').textContent = a2;
	document.querySelector('.row3 .a3').textContent = b2;
	c3 = a2 - b2;
}
task3();

document.querySelector('.b-3').addEventListener('click', () => {
	const data = +document.querySelector('.row3 .i').value;
	const input = document.getElementById('i-3');
	if (data == c3) {
		if (hash == 'ge') {
			empty.textContent = 'ყოჩაღ!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'молодец!!!';
		}
		mySet.add(3);
		localStorage.setItem('score', mySet.size)
		if (localStorage.getItem('score') == '10') {
			showScore();
		}
	} else if (data == '') {
		if (hash == 'ge') {
			empty.textContent = 'ჯერ ჩაწერე ციფრი!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'сперва введи цифру!!!';
		}
	} else if (data != c3 && data != '') {
		if (hash == 'ge') {
			empty.textContent = 'არასწორია!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'неправильно!!!';
		}
		input.value = '';
	}
});

let c4 = 0;
function task4() {
	let a1 = randomInt(1, 20);
	let b1 = randomInt(1, 20);
	let a2 = 0;
	let b2 = 0;
	if (a1 >= b1) {
		a2 = a1;
		b2 = b1;
	} else {
		a2 = b1;
		b2 = a1;
	}
	document.querySelector('.row4 .a1').textContent = a2;
	document.querySelector('.row4 .a3').textContent = b2;
	c4 = a2 - b2;
}
task4();

document.querySelector('.b-4').addEventListener('click', () => {
	const data = +document.querySelector('.row4 .i').value;
	const input = document.getElementById('i-4');
	if (data == c4) {
		if (hash == 'ge') {
			empty.textContent = 'ყოჩაღ!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'молодец!!!';
		}
		mySet.add(4);
		localStorage.setItem('score', mySet.size)
		if (localStorage.getItem('score') == '10') {
			showScore();
		}
	} else if (data == '') {
		if (hash == 'ge') {
			empty.textContent = 'ჯერ ჩაწერე ციფრი!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'сперва введи цифру!!!';
		}
	} else if (data != c4 && data != '') {
		if (hash == 'ge') {
			empty.textContent = 'არასწორია!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'неправильно!!!';
		}
		input.value = '';
	}
});

let c5 = 0;
function task5() {
	let a1 = randomInt(1, 20);
	let b1 = randomInt(1, 20);
	let a2 = 0;
	let b2 = 0;
	if (a1 >= b1) {
		a2 = a1;
		b2 = b1;
	} else {
		a2 = b1;
		b2 = a1;
	}
	document.querySelector('.row5 .a1').textContent = a2;
	document.querySelector('.row5 .a3').textContent = b2;
	c5 = a2 - b2;
}
task5();

document.querySelector('.b-5').addEventListener('click', () => {
	const data = +document.querySelector('.row5 .i').value;
	const input = document.getElementById('i-5');
	if (data == c5) {
		if (hash == 'ge') {
			empty.textContent = 'ყოჩაღ!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'молодец!!!';
		}
		mySet.add(5);
		localStorage.setItem('score', mySet.size)
		if (localStorage.getItem('score') == '10') {
			showScore();
		}
	} else if (data == '') {
		if (hash == 'ge') {
			empty.textContent = 'ჯერ ჩაწერე ციფრი!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'сперва введи цифру!!!';
		}
	} else if (data != c5 && data != '') {
		if (hash == 'ge') {
			empty.textContent = 'არასწორია!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'неправильно!!!';
		}
		input.value = '';
	}
});

let c6 = 0;
function task6() {
	let a1 = randomInt(1, 20);
	let b1 = randomInt(1, 20);
	let a2 = 0;
	let b2 = 0;
	if (a1 >= b1) {
		a2 = a1;
		b2 = b1;
	} else {
		a2 = b1;
		b2 = a1;
	}
	document.querySelector('.row6 .a1').textContent = a2;
	document.querySelector('.row6 .a3').textContent = b2;
	c6 = a2 - b2;
}
task6();

document.querySelector('.b-6').addEventListener('click', () => {
	const data = +document.querySelector('.row6 .i').value;
	const input = document.getElementById('i-6');
	if (data == c6) {
		if (hash == 'ge') {
			empty.textContent = 'ყოჩაღ!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'молодец!!!';
		}
		mySet.add(6);
		localStorage.setItem('score', mySet.size)
		if (localStorage.getItem('score') == '10') {
			showScore();
		}
	} else if (data == '') {
		if (hash == 'ge') {
			empty.textContent = 'ჯერ ჩაწერე ციფრი!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'сперва введи цифру!!!';
		}
	} else if (data != c6 && data != '') {
		if (hash == 'ge') {
			empty.textContent = 'არასწორია!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'неправильно!!!';
		}
		input.value = '';
	}
});

let c7 = 0;
function task7() {
	let a1 = randomInt(1, 20);
	let b1 = randomInt(1, 20);
	let a2 = 0;
	let b2 = 0;
	if (a1 >= b1) {
		a2 = a1;
		b2 = b1;
	} else {
		a2 = b1;
		b2 = a1;
	}
	document.querySelector('.row7 .a1').textContent = a2;
	document.querySelector('.row7 .a3').textContent = b2;
	c7 = a2 - b2;
}
task7();

document.querySelector('.b-7').addEventListener('click', () => {
	const data = +document.querySelector('.row7 .i').value;
	const input = document.getElementById('i-7');
	if (data == c7) {
		if (hash == 'ge') {
			empty.textContent = 'ყოჩაღ!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'молодец!!!';
		}
		mySet.add(7);
		localStorage.setItem('score', mySet.size)
		if (localStorage.getItem('score') == '10') {
			showScore();
		}
	} else if (data == '') {
		if (hash == 'ge') {
			empty.textContent = 'ჯერ ჩაწერე ციფრი!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'сперва введи цифру!!!';
		}
	} else if (data != c7 && data != '') {
		if (hash == 'ge') {
			empty.textContent = 'არასწორია!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'неправильно!!!';
		}
		input.value = '';
	}
});

let c8 = 0;
function task8() {
	let a1 = randomInt(1, 20);
	let b1 = randomInt(1, 20);
	let a2 = 0;
	let b2 = 0;
	if (a1 >= b1) {
		a2 = a1;
		b2 = b1;
	} else {
		a2 = b1;
		b2 = a1;
	}
	document.querySelector('.row8 .a1').textContent = a2;
	document.querySelector('.row8 .a3').textContent = b2;
	c8 = a2 - b2;
}
task8();

document.querySelector('.b-8').addEventListener('click', () => {
	const data = +document.querySelector('.row8 .i').value;
	const input = document.getElementById('i-8');
	if (data == c8) {
		if (hash == 'ge') {
			empty.textContent = 'ყოჩაღ!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'молодец!!!';
		}
		mySet.add(8);
		localStorage.setItem('score', mySet.size)
		if (localStorage.getItem('score') == '10') {
			showScore();
		}
	} else if (data == '') {
		if (hash == 'ge') {
			empty.textContent = 'ჯერ ჩაწერე ციფრი!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'сперва введи цифру!!!';
		}
	} else if (data != c8 && data != '') {
		if (hash == 'ge') {
			empty.textContent = 'არასწორია!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'неправильно!!!';
		}
		input.value = '';
	}
});

let c9 = 0;
function task9() {
	let a1 = randomInt(1, 20);
	let b1 = randomInt(1, 20);
	let a2 = 0;
	let b2 = 0;
	if (a1 >= b1) {
		a2 = a1;
		b2 = b1;
	} else {
		a2 = b1;
		b2 = a1;
	}
	document.querySelector('.row9 .a1').textContent = a2;
	document.querySelector('.row9 .a3').textContent = b2;
	c9 = a2 - b2;
}
task9();

document.querySelector('.b-9').addEventListener('click', () => {
	const data = +document.querySelector('.row9 .i').value;
	const input = document.getElementById('i-9');
	if (data == c9) {
		if (hash == 'ge') {
			empty.textContent = 'ყოჩაღ!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'молодец!!!';
		}
		mySet.add(9);
		localStorage.setItem('score', mySet.size)
		if (localStorage.getItem('score') == '10') {
			showScore();
		}
	} else if (data == '') {
		if (hash == 'ge') {
			empty.textContent = 'ჯერ ჩაწერე ციფრი!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'сперва введи цифру!!!';
		}
	} else if (data != c9 && data != '') {
		if (hash == 'ge') {
			empty.textContent = 'არასწორია!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'неправильно!!!';
		}
		input.value = '';
	}
});

let c10 = 0;
function task10() {
	let a1 = randomInt(1, 20);
	let b1 = randomInt(1, 20);
	let a2 = 0;
	let b2 = 0;
	if (a1 >= b1) {
		a2 = a1;
		b2 = b1;
	} else {
		a2 = b1;
		b2 = a1;
	}
	document.querySelector('.row10 .a1').textContent = a2;
	document.querySelector('.row10 .a3').textContent = b2;
	c10 = a2 - b2;
}
task10();

document.querySelector('.b-10').addEventListener('click', () => {
	const data = +document.querySelector('.row10 .i').value;
	const input = document.getElementById('i-10');
	if (data == c10) {
		if (hash == 'ge') {
			empty.textContent = 'ყოჩაღ!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'молодец!!!';
		}
		mySet.add(10);
		localStorage.setItem('score', mySet.size)
		if (localStorage.getItem('score') == '10') {
			showScore();
		}
	} else if (data == '') {
		if (hash == 'ge') {
			empty.textContent = 'ჯერ ჩაწერე ციფრი!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'сперва введи цифру!!!';
		}
	} else if (data != c10 && data != '') {
		if (hash == 'ge') {
			empty.textContent = 'არასწორია!!!';
		} else if (hash == 'ru') {
			empty.textContent = 'неправильно!!!';
		}
		input.value = '';
	}
});

/*===================================================================*/

function resetAll() {
	empty.textContent = '';
	rows.forEach((item) => {
		item.style.border = `none`;
	})
}

/*===================================================================*/

function randomInt(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}

/*===================================================================*/

restartGame.addEventListener('click', () => {
	location.reload()
	localStorage.setItem('score', score);
});

/*===================================================================*/

import showScore from "../modules/showScore.js";



