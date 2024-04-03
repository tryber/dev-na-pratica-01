import { logo } from '../../assets';
import { RouteButton } from '../buttons';

export default function Header() {
  return (
    <header className="w-full flex justify-around items-center">
      <img src={ logo } alt="Logo da Trybe" />
      <nav className="flex">
        <RouteButton text="Home" path="/" />
        <RouteButton text="Histórico" path="highlights/history" />
      </nav>
    </header>
  );
}
