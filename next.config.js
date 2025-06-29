/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/payme' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/payme' : '',
}

module.exports = nextConfig