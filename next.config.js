/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'images.sympla.com.br',
      'github.com'
    ]
  }
}

module.exports = nextConfig
