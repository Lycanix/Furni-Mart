function productsPage() {
	fetch('src/pages/products.html')
		.then((res) => res.text())
		.then((html) => {
			document.getElementById('app').innerHTML = html;
		});
}
