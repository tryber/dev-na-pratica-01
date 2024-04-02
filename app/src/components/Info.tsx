import React from 'react';
import '../styles/Info.css';

function Info(): JSX.Element {
  const two = [1, 2];

  return (
    <div className="container-info">
      {two.map((item) => (
        <div className="div-person" key={item}>
          <img src="" alt="imagem do dev" />
          <p>Nome: </p>
          <p>Linkedin: </p>
          <p>GitHub: </p>
          <p>Email: </p>
        </div>
      ))}
    </div>
  );
}

export default Info;
