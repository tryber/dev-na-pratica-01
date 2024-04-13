const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/dev-na-pratica-01' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
