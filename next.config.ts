import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['i.imgur.com', 'via.assets.so'], // Add the domain here
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
