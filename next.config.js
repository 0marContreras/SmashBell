/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.start.gg', 'smashgg-images.s3.amazonaws.com', 'i.imgur.com'],
  },
}

module.exports = nextConfig
