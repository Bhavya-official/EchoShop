/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/EchoShop' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/EchoShop/' : '',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'images.pexels.com']
  }
}

module.exports = nextConfig
