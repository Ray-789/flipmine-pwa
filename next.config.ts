/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['scontent.fyxk1-1.fna.fbcdn.net'],
  },

  // 👇 This is where headers should be defined (inside the config)
  async headers() {
    return [
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
};

// 👇 Wrap and export withPWA
export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})(nextConfig);
