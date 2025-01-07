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
      },
      {
        protocol: 'http',
        hostname: '209.38.189.197:3003',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/graphql', // Frontend path
        destination: 'http://209.38.189.197:3003/api/graphql', // Backend API
      },
    ];
  },
  /* other config options here */
};

export default nextConfig;
