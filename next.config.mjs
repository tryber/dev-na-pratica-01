import path from 'path';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
  },
  webpack(config, { isServer }) {
    const outputPath = path.resolve(process.cwd(), 'public');

    config.module.rules.push({
      test: /\.(jpe?g|png|gif|svg|ico)$/i,
      loader: 'file-loader',
      options: {
        outputPath,
        publicPath: '/_next/static/images',
        name: '[name].[ext]',
      },
    });

    return config;
  },
};

export default nextConfig;
