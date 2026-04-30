import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Recommended for static/standalone if not using a separate image optimizer
  }
};

export default nextConfig;
