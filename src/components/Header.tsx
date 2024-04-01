import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="container-button">
        <Link className="nav-links" to="/">Home</Link>
        <Link className="nav-links" to="/history">History</Link>
        <Link target="_blank" to="https://www.betrybe.com/formacao-desenvolvimento-web">Curso Trybe</Link>
      </nav>
    </header>
  );
}

export default Header;
