import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="container-button">
        <ul>
          <li><Link className="nav-links" to="/">Home</Link></li>
          <li><Link className="nav-links" to="/history">History</Link></li>
          <li><Link target="_blank" to="https://www.betrybe.com/formacao-desenvolvimento-web">Curso Trybe</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
