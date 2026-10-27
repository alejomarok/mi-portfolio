/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Limit concurrent build workers on memory-constrained local environments.
  experimental: { cpus: 1 },
};

module.exports = nextConfig;
