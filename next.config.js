/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sofinnovapartners.com',
      },
    ],
    unoptimized: false,
  },
}

module.exports = nextConfig

