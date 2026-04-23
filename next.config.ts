import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/worship", destination: "/about#worship", permanent: true },
      { source: "/foodbank", destination: "/ministry/foodbank", permanent: true },
      { source: "/news", destination: "/community/notices", permanent: true },
    ];
  },
};

export default nextConfig;
