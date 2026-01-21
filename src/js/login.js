function loginPage() {
	showNavbar(false);

	fetch('src/pages/login.html')
		.then((res) => res.text())
		.then((html) => {
			const loginEl = document.getElementById('app');
			loginEl.innerHTML = html;
			bindLoginEvent();

			loginEl.addEventListener('click', function (e) {
				const page = e.target.getAttribute('register-now');
				if (!page) return;

				// console log untuk melihat sementara
				console.log('navigate to:', page);

				e.preventDefault();
				navigate(page);
			});
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
