import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(): JSX.Element {
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <div>
          <button type="button" onClick={() => navigate('/ola')}>
            <span>Home</span>
          </button>
          <button type="button" onClick={() => navigate('/history')}>
            <span>Destaques do Mês</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
