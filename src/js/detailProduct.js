function detailProduct() {
	fetch('src/pages/detailProduct.html')
		.then((res) => res.text())
		.then((html) => {
			document.getElementById('app').innerHTML = html;
		});
}

