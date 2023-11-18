/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
