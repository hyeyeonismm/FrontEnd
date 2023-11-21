const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
      '/news',
      createProxyMiddleware({
         target: process.env.REACT_APP_INDI_SERVER_PORT,
         changeOrigin: true,
      }),
   );
   app.use(
      '/stock',
      createProxyMiddleware({
         target: process.env.REACT_APP_INDI_SERVER_PORT,
         changeOrigin: true,
      }),
   );
   app.use(
      '/auth',
      createProxyMiddleware({
         target: process.env.REACT_APP_SERVER_PORT,
         changeOrigin: true,
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
