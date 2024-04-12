export const imageLoader = ({ src, width, quality }) => {
  return `https://alanguilhermem.github.io/dev-na-pratica-02/${src}?w=${width}&q=${quality || 75}`;
};