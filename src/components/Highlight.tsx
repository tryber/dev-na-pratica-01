import Post from '../types/PostType';

type HighlightProps = {
  post: Post
};

function Highlight({ post }: HighlightProps) {
  // const [isHovered, setIsHovered] = useState(false);

  const {
    id, description, title, tags, name, picture, github, linkedin, illustration,
  } = post;

  return (
    <div className="div-highlight">
      <h2>{title}</h2>
      <div className="div-student">
        <img className="img-person" src={picture} alt="Foto de perfil" />
        <div className="info-person">
          <p>{`Nome: ${name}`}</p>
          <a href={linkedin} target="_blank" rel="noreferrer">Linkedin</a>
          <a href={github} target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
      <div className="div-flex">
        <div className="img-port" style={{ backgroundImage: `url(${illustration})` }}>
          <div className="overlay">
            <h3>{description}</h3>
            {tags.map((tag) => <h4 key={`${id}-${tag}`}>{tag}</h4>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
