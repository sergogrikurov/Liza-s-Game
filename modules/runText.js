function typeText() {
	let hash = localStorage.getItem('hash');
	let t = [];
	if (hash == 'ge') {
		t.push('გამაგჯობა');
	} else if (hash == 'ru') {
		t.push('Здравствуй');
	}

	const h1 = document.querySelector('h1');
	let line = 0;
	let count = 0;
	let out = '';
	function typeLine() {
		let timeOut = setTimeout(function () {
			out += t[line][count];
			h1.textContent = out + '|';
			count++;

			if (count >= t[line].length) {
				count = 0;
				line++;
				if (line == t.length) {
					clearTimeout(timeOut);
					h1.textContent = out;
					return true;
				}
			}
			typeLine();
		}, getRendomInt(getRendomInt(350 * 2.3)));
	}

	typeLine();
	setTimeout(typeTextSpan, 2000);

	function typeTextSpan() {
		let hash = localStorage.getItem('hash');
		let tS = [];
		if (hash == 'ge') {
			tS.push('გიყვარს ');
		} else if (hash == 'ru') {
			tS.push('ты любишь');
		}

		const h1Span = document.querySelector('.h1-span');
		let line = 0;
		let count = 0;
		let out = '';
		function typeLine() {
			let timeOut = setTimeout(function () {
				out += tS[line][count];
				h1Span.textContent = out + '|';
				count++;
				if (count >= tS[line].length) {
					count = 0;
					line++;
					if (line == t.length) {
						clearTimeout(timeOut);
						h1Span.textContent = out;
						return true;
					}
				}
				typeLine();
			}, getRendomInt(getRendomInt(350 * 1.0)));
		}
		typeLine();
	}

	setTimeout(typeTextSpan2, 2800);

	function typeTextSpan2() {
		let hash = localStorage.getItem('hash');
		let tS = [];
		if (hash == 'ge') {
			tS.push('მათემათიკა?');
		} else if (hash == 'ru') {
			tS.push('математику?');
		}

		const h1Span2 = document.querySelector('.h1-span2');
		let line = 0;
		let count = 0;
		let out = '';
		function typeLine() {
			let timeOut = setTimeout(function () {
				out += tS[line][count];
				h1Span2.textContent = out + '|';
				count++;
				if (count >= tS[line].length) {
					count = 0;
					line++;
					if (line == t.length) {
						clearTimeout(timeOut);
						h1Span2.textContent = out;
						return true;
					}
				}
				typeLine();
			}, getRendomInt(getRendomInt(350 * 1.5)));
		}
		typeLine();
	}


	function getRendomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
};

export default typeText;

/*===================================================*/
