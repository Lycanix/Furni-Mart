function cartPage() {
	fetch('src/pages/cart.html')
		.then((res) => res.text())
		.then((html) => {
			document.getElementById('app').innerHTML = html;
		});
}
