import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "localhost",
      "tafaria.com",
      "www.tafaria.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tafaria.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "nebulacrs.hti.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tafaria.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tafaria.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "209.38.189.197",
        port: "3003",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "http",
        hostname: "10.106.5.117:3000",
        port: "3000",
        pathname: "/**",
        search: "",
      },
      
      {
        protocol: "https",
        hostname: "tafariabucket.fra1.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'tafariabucket.fra1.cdn.digitaloceanspaces.com',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  async rewrites() {
    return [
      {
        source: "/api/graphql", // Frontend path
        destination: "http://209.38.189.197:3003/api/graphql", // Backend API
      },
    ];
  },
  /* other config options here */
};

export default nextConfig;
