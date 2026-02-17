import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/PrimeServefs',
  assetPrefix: '/PrimeServefs/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
