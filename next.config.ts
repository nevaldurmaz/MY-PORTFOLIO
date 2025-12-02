import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "pbs.twimg.com",
      "images.unsplash.com",
      "ap-south-1.cdn.hygraph.com", // ✅ HyGraph CDN domain'i
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ap-south-1.cdn.hygraph.com",
        pathname: "/content/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_GRAPHICS_URL: process.env.NEXT_PUBLIC_GRAPHICS_URL,
  },
};

export default nextConfig;
