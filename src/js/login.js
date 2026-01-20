function loginPage() {
	showNavbar(false);

	fetch('src/pages/login.html')
		.then((res) => res.text())
		.then((html) => {
			document.getElementById('app').innerHTML = html;
			bindLoginEvent();
		});
}

function bindLoginEvent() {
	const form = document.getElementById('login-form');
	if (!form) return;

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;

		if (email === '' || password === '') {
			alert('Email dan password wajib diisi');
			return;
		}

		console.log('login attempt:', email, password);

		alert('Login berhasil');
	});
}
