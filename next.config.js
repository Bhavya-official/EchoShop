/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repository = 'EchoShop';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  basePath: isProd ? `/${repository}` : '',
  assetPrefix: isProd ? `/${repository}/` : '',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'images.pexels.com']
  },
  // Add this to ensure static export works correctly
  trailingSlash: true
}

module.exports = nextConfig
