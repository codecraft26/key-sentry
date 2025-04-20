import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: ['images.unsplash.com'], // ← Add this line
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  },
};

export default nextConfig;
