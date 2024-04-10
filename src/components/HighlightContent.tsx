import Post from '../types/PostType';

type HighlightProps = {
  post: Post
};

function HighlightContent({ post }: HighlightProps) {
  // const [isHovered, setIsHovered] = useState(false);

  const {
    id, description, title, tags, illustration, link,
  } = post;

  return (
    <div className="div-flex">
      <h2>{title}</h2>
      <div className="img-port" style={{ backgroundImage: `url(${illustration})` }}>
        <div className="overlay">
          <h3>{description}</h3>
          <div className="flex row div-tags">
            {tags.map((tag) => (
              <h4 key={`${id}-${tag}`} className={`tag ${tag}`}>
                {tag}
              </h4>
            ))}
          </div>
          <br />
          <h3>
            link:
            <a href={link} target="_blank" rel="noreferrer">{link}</a>
          </h3>
        </div>
        <p>para dispositivo movel click na imagem</p>
      </div>
    </div>
  );
}

export default HighlightContent;
