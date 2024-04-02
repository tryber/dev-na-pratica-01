import { Link } from 'react-router-dom';
import { logo } from '../../assets';

export default function Header() {
  return (
    <header className="w-full flex justify-around items-center">
      <img src={ logo } alt="Logo da Trybe" />

      <ul className="flex items-center gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/historico">Histórico</Link></li>
      </ul>
    </header>
  );
}
