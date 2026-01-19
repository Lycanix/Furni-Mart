function landingPage() {
	fetch('src/pages/landing.html')
		.then((res) => res.text())
		.then((html) => {
			document.getElementById('app').innerHTML = html;
		});
}
