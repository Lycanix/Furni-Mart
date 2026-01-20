function profilePage() {
	fetch('src/pages/profile.html')
		.then((res) => res.text())
		.then((html) => {
			document.getElementById('app').innerHTML = html;
		});
}
