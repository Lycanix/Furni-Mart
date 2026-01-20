const routes = {
	landing: landingPage,
	product: productsPage,
	wishlist: wishlistPage,
	about: loginPage,
	profile: profilePage,
	cart: cartPage,
};

let authUser = null;

function showNavbar(show) {
	const navbar = document.getElementById('navbar');
	if (!navbar) return;

	navbar.style.display = show ? 'block' : 'none';
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
