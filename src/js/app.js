const routes = {
	landing: landingPage,
	// product: productPage,
	// wishlist,
	// about,
	// profile,
	// cart,
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
