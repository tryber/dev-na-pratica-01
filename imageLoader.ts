import { ImageLoader } from 'next/image';

const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return `https://alanguilhermem.github.io/dev-na-pratica-02/${src}?w=${width}&q=${quality || 75}`;
};

export default imageLoader;