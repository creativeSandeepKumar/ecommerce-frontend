
// import { createProxyMiddleware } from 'http-proxy-middleware';
/** @type {import('next').NextConfig} */

// const nextConfig = {
  
  
  // api: {
  //   bodyParser: false,
  //   externalResolver: true,
  //   middleware: createProxyMiddleware({
  //     target: 'http://localhost:8080', // Replace with your actual backend URL
  //     changeOrigin: true, // Important for handling cookies and other headers
  //   }),
  // },
  
// };

// export default nextConfig;

import { createServer } from 'http';

export default {
  server: async (config = {}) => {
    // Set custom DNS resolution order (if necessary)
    dns.setDefaultResultOrder("verbatim");

    // Create a custom server for potential additional configuration (optional)
    const customServer = createServer(config.req, config.res);

    // Handle requests as needed (optional)

    return customServer;
  },
};

