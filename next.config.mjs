// import CopyPlugin from 'copy-webpack-plugin';
// import imageLoader from './imageLoader';

const nextConfig = {
  output: 'export',
  images: {
    // unoptimized: false,
    loader: 'custom'
  },
  // webpack: (config, { isServer }) => {
  //   // Adiciona o plugin para copiar arquivos de imagem para o diretório de saída
  //   config.plugins.push(
  //     new CopyPlugin({
  //       patterns: [
  //         {
  //           from: 'public/', // Caminho dos arquivos de imagem na pasta public
  //           to: 'static/media', // Caminho de saída para os arquivos de imagem no diretório de build
  //         },
  //       ],
  //     })
  //   );

  //   return config;
  // },
};

export default nextConfig;
