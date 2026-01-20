const routes = {
	landing: landingPage,
	product: productsPage,
	wishlist: wishlistPage,
	// about,
	// profile,
	cart: cartPage,
};

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
