localStorage.removeItem('name');
localStorage.removeItem('score');

import typeText from "../modules/runText.js";
typeText();

const ok = document.querySelector('.ok');
const no = document.querySelector('.no');
const checkOk = document.querySelector('.check-ok');
const checkNo = document.querySelector('.check-no');

const h1 = document.querySelector('h1');
const h1Span = document.querySelector('.h1-span');
const h1Span2 = document.querySelector('.h1-span2');

const checkboxWrapper = document.querySelector('.checkbox-wrapper');
const sadFace = document.querySelector('.sad-face');

const inputNameWrapper = document.querySelector('.input-name-wrapper');
const nameBtn = document.getElementById('name-btn');
const inputName = document.getElementById('input-name');
const jer = document.querySelector('.jer');
const checkConteinerOk = document.querySelector('.check-container-ok');
const checkConteinerNo = document.querySelector('.check-container-no');

const chooseClass = document.querySelector('.choose-class');
const chooseClassSpan = document.querySelector('.choose-class span');

const firstClassBtn = document.querySelector('.choose-class__class-one');
const firstClass = document.querySelector('.first-class');
const firstClassSpan = document.querySelector('.first-class span');

const secondClassBtn = document.querySelector('.choose-class__class-two');
const secondClass = document.querySelector('.second-class');
const secondClassSpan = document.querySelector('.second-class span');

const thirdClassBtn = document.querySelector('.choose-class__class-tree');
const thirdClass = document.querySelector('.third-class');
const thirdClassSpan = document.querySelector('.third-class span');

// для галочек
document.querySelector('.check-container-ok').onclick = () => {
	checkOk.classList.toggle('active');
}
// для галочек
document.querySelector('.check-container-no').onclick = () => {
	checkNo.classList.add('active');
}

ok.addEventListener('click', () => {
	checkConteinerNo.classList.add('hide');
	setTimeout(showNameInput, 500);
});

no.addEventListener('click', () => {
	checkConteinerOk.classList.add('hide');
	setTimeout(showSadFace, 500);
});

inputName.oninput = () => {
	if (inputName.value != '') {
		inputName.style.border = '3px solid green';
	} else {
		inputName.style.border = '3px solid blue';
	}
}

nameBtn.onclick = () => {
	if (inputName.value != '') {
		let userName = inputName.value;
		userName = userName.trim().toLocaleUpperCase();
		const n = localStorage.setItem('name', userName);
		chooseClassSpan.textContent = userName;
		chooseClass.classList.remove('hide');
		inputNameWrapper.classList.add('hide');
	} else {
		jer.classList.remove('hide');
		inputName.onclick = () => {
			jer.classList.add('hide');
		}
	}
}

function showNameInput() {
	checkboxWrapper.classList.add('hide');
	if (checkboxWrapper.classList.contains('hide')) {
		h1.classList.add('hide');
		h1Span.classList.add('hide');
		h1Span2.classList.add('hide');
		inputNameWrapper.classList.remove('hide');
	}
}

function showSadFace() {
	sadFace.classList.remove('hide');
	h1.classList.add('hide');
	h1Span.classList.add('hide');
	h1Span2.classList.add('hide');
	checkboxWrapper.classList.add('hide');
	sadFace.onclick = () => {
		checkConteinerOk.classList.remove('hide');
		checkNo.classList.remove('active');
		h1.classList.remove('hide');
		h1Span.classList.remove('hide');
		h1Span2.classList.remove('hide');
		checkboxWrapper.classList.remove('hide');
		sadFace.classList.add('hide');
	}
}

firstClassBtn.onclick = () => {
	chooseClass.classList.add('hide');
	firstClass.classList.remove('hide');
	const n = localStorage.getItem('name');
	firstClassSpan.textContent = n;
}

secondClassBtn.onclick = () => {
	chooseClass.classList.add('hide');
	secondClass.classList.remove('hide');
	const n = localStorage.getItem('name');
	secondClassSpan.textContent = n;
}

thirdClassBtn.onclick = () => {
	chooseClass.classList.add('hide');
	thirdClass.classList.remove('hide');
	const n = localStorage.getItem('name');
	thirdClassSpan.textContent = n;
}

import langArr from "../modules/lang.js";

function changeLang() {
	let hash = localStorage.getItem('hash');
	location.href = window.location.pathname + '#ge' + hash;
	inputName.placeholder = langArr['inputName placeholder'][hash];
	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.textContent = langArr[key][hash];
		}
	}
}

changeLang()



