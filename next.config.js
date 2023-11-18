/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
