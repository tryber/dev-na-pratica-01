import Post from '../types/PostType';

type HighlightProps = {
  post: Post
};

function Highlight({ post }: HighlightProps) {
  const {
    id, description, tags, name, picture, github, linkedin, title, illustration,
  } = post;
  return (
    <div className="flex row div-highlight ">
      <div className="flex column div-student">
        <img src={picture} alt="Foto de perfil" />
        <h3>{`Nome: ${name}`}</h3>
        <a href={linkedin} target="_blank" rel="noreferrer">Linkedin</a>
        <a href={github} target="_blank" rel="noreferrer">Github</a>
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={illustration} alt="Foto do destaque" />
        <div>
          {tags.map((tag) => <h4 key={`${id}-${tag}`}>{tag}</h4>)}
        </div>
      </div>
    </div>
  );
}

export default Highlight;
