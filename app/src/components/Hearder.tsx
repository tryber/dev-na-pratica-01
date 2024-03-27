import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(): JSX.Element {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="container-button">
        <div className="button-options">
          <button type="button" onClick={() => navigate('/')}>
            <span>Home</span>
          </button>
          <button type="button" onClick={() => navigate('/history')}>
            <span>Destaques do Mês</span>
          </button>
          <a target="_blank" href="https://www.betrybe.com/formacao-desenvolvimento-web" rel="noreferrer">
            <button type="button">
              <span>
                Curso Trybe
              </span>
            </button>
          </a>
        </div>
        {/* <div className="button-login">
          <a href="https://app.betrybe.com/login?_gl=1*1v5167f*_ga*MTM4OTYwOTgzNi4xNzA2NzIyNjg1*_ga_JRYMZ1LMBF*MTcxMTQ3MzYzNS4zNS4xLjE3MTE0NzM2MzYuNTkuMC4w&_ga=2.94989978.72088453.1711465070-1389609836.1706722685">
            <button type="button">
              <span>
                LOGIN
              </span>
            </button>
          </a>
          <a href="https://app.betrybe.com/registration">
            <button type="button">
              <span>
                CRIAR CONTA
              </span>
            </button>
          </a>
        </div> */}
      </nav>
    </header>
  );
}

export default Header;
