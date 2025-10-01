import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: process.env.IMAGE_HOST_NAME
      ? process.env.IMAGE_HOST_NAME.split(',').map((host) => ({
          hostname: host.trim(),
        }))
      : [],
  },
};

export default nextConfig;
