const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/news',
		createProxyMiddleware({
			target: 'https://398a-118-91-110-133.ngrok-free.app/',
			changeOrigin: true,
		}),
	);
	app.use(
		'/stock',
		createProxyMiddleware({
			target: 'https://398a-118-91-110-133.ngrok-free.app/',
			changeOrigin: true,
		}),
	);
	// app.use(
	// 	'/auth',
	// 	createProxyMiddleware({
	// 		target: 'http://backend-service:8080/',
	// 		changeOrigin: true,
	// 	}),
	// );
	// app.use(
	// 	'/card',
	// 	createProxyMiddleware({
	// 		target: 'http://backend-service:8080/',
	// 		changeOrigin: true,
	// 	}),
	// );
};
