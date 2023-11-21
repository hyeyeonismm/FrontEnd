const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/auth',
		createProxyMiddleware({
			target: process.env.REACT_APP_SERVER_PORT,
		}),
	);
	app.use(
		'/card',
		createProxyMiddleware({
			target: process.env.REACT_APP_SERVER_PORT,
			changeOrigin: true,
		}),
	);
	app.use(
		'/link',
		createProxyMiddleware({
			target: process.env.REACT_APP_SERVER_PORT,
			changeOrigin: true,
		}),
	);
};
