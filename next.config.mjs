/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  basePath: isProd ? '/dev': '',
  output: 'export',
  images: {
    unoptimized: true,
  },
  // reactStrictMode: true,
};

export default nextConfig;
