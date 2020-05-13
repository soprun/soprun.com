// # https://create-react-app.dev/docs/proxying-api-requests-in-development
// # yarn add http-proxy-middleware

// @ts-ignore
import {createProxyMiddleware} from "http-proxy-middleware";

module.exports = (app: any) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};

