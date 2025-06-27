/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['scontent.fyxk1-1.fna.fbcdn.net'],
  },
};

module.exports = nextConfig;

