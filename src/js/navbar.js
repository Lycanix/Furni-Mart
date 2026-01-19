function navbar(navigate) {
	fetch('src/pages/navbar.html')
		.then((res) => res.text())
		.then((html) => {
			const navbarEl = document.getElementById('navbar');
			navbarEl.innerHTML = html;

			navbarEl.addEventListener('click', function (e) {
				const page = e.target.getAttribute('data-page');
				if (!page) return;

                // console log untuk melihat sementara
				console.log('navigate to:', page);
				e.preventDefault();
				navigate(page);
			});
		});
}
