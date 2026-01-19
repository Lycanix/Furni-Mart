function wishlistPage() {
	fetch('src/pages/wishlist.html')
		.then((res) => res.text())
		.then((html) => {
			document.getElementById('app').innerHTML = html;
		});
}
