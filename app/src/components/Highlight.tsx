import React from 'react';
import Post from '../types/PostType';
import '../styles/Highlight.css';

interface HighlightProps {
  post: Post
}

function Highlight({ post }: HighlightProps): JSX.Element {
  const {
    description, tags, name, picture, github, linkedin,
  } = post;
  return (
    <div className="flex row div-highlight">
      <div className="flex column div-student">
        <img src={picture} alt="Foto de perfil" />
        <h2>{name}</h2>
        <a href={linkedin} target="_blank" rel="noreferrer">Linkedin</a>
        <a href={github} target="_blank" rel="noreferrer">Github</a>
      </div>
      <div>
        <h1>Destaque</h1>
        <p>{description}</p>
        <img src={picture} alt="Foto do destaque" />
        <div>
          {tags.map((tag) => <h4>{tag}</h4>)}
        </div>
      </div>
      <div />
    </div>
  );
}

export default Highlight;
