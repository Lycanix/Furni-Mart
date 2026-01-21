const routes = {
	landing: landingPage,
	product: productsPage,
	wishlist: wishlistPage,
	about: loginPage,
	profile: profilePage,
	cart: cartPage,
	// register,
};

let authUser = null;

function showNavbar(show) {
	const navbar = document.getElementById('navbar');
	if (!navbar) return;

	if (show) {
		navbar.style.display = 'flex';
		app.style.marginTop = '80px';
	} else {
		navbar.style.display = 'none';
		app.style.marginTop = '0';
	}
}

function navigate(page) {
	const handler = routes[page];
	if (!handler) return;

	handler();
}

function initApp() {
	navbar(navigate);
	navigate('landing');
}

initApp();
