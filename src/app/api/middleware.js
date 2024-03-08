import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (req, res) {
  // Configure the proxy
  const proxy = createProxyMiddleware({
    target: 'http://localhost:8080', // Replace with your actual backend URL
    changeOrigin: true, // Important for handling cookies and other headers
  });

  // Apply the proxy to requests starting with '/api/v1'
  if (req.url.startsWith('/api/v1')) {
    return proxy(req, res);
  }

  // Pass through other requests (optional)
  // ...
}
