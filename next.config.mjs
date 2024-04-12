// import CopyPlugin from 'copy-webpack-plugin';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
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
