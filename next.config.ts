import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  domains: [
    'scontent.fyxk1-1.fna.fbcdn.net',
    'scontent.xx.fbcdn.net', // fallback for other FB regions
  ],
};

export default nextConfig;
