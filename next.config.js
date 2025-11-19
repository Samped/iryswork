/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['arweave.net'],
    unoptimized: true,
  },
}

module.exports = nextConfig

