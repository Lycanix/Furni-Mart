function registerPage() {
	fetch('src/pages/register.html')
		.then((res) => res.text())
		.then((html) => {
			document.getElementById('app').innerHTML = html;
			bindRegisterEvent();
		});
}

function bindRegisterEvent() {
	const form = document.getElementById('register-form');
	if (!form) return;

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		const first = document.getElementById('first-name').value;
		const last = document.getElementById('last-name').value;
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;

		if (first === '') {
			alert('First name harus diisi');
			return;
		}

		if (last === '') {
			alert('Last name harus diisi');
			return;
		}

		if (email === '' || password === '') {
			alert('Email dan password wajib diisi');
			return;
		}

		if (password.length < 8) {
			alert('Password anda kurang dari 8 karakter');
			return;
		}

		console.log('register attempt:', first, last, email, password);

		alert('Register berhasil');
	});
}
