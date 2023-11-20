const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/news',
		createProxyMiddleware({
			target: 'https://2a1d-118-91-110-133.ngrok-free.app/',
			changeOrigin: true,
		}),
	);
};
