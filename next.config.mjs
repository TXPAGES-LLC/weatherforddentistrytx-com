/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: { deviceSizes: [640, 828, 1200, 1920], minimumCacheTTL: 604800 },
};

export default nextConfig;
