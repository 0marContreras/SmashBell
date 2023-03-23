/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.start.gg', 'smashgg-images.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
