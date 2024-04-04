import { Link } from 'react-router-dom';
import Logo from '../../../public/logo.svg';

function Header() {
  return (
    <header className="w-full flex justify-around items-center">
      <img src={ Logo } alt="Logo da Trybe" />

      <ul className="flex items-center gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/historico">Histórico</Link></li>
      </ul>
    </header>
  );
}

export default Header;
