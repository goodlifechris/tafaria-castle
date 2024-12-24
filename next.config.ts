import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.tafaria.com',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'tafaria.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  /* config options here */
};

export default nextConfig;
