import Post from '../types/PostType';
import linkedinImg from '../assests/linkedin_3536569.webp';
import githubImg from '../assests/github-logo.webp';

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
        <div className="flex justify">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <img alt="Linkedin" src={linkedinImg} className="social-logo" />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <img alt="Github" src={githubImg} className="social-logo" />
          </a>
        </div>
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={illustration} alt="Foto do destaque" />
        <div className="flex row div-tags">
          {tags.map((tag) => (
            <h4 key={`${id}-${tag}`} className={`tag ${tag}`}>
              {tag}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Highlight;
