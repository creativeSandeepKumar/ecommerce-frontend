
import { createProxyMiddleware } from 'http-proxy-middleware';
/** @type {import('next').NextConfig} */

const nextConfig = {
  
  // api: {
  //   bodyParser: false,
  //   externalResolver: true,
  //   middleware: createProxyMiddleware({
  //     target: 'http://localhost:8080', // Replace with your actual backend URL
  //     changeOrigin: true, // Important for handling cookies and other headers
  //   }),
  // },
  
};

export default nextConfig;
