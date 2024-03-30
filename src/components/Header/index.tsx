import { logo } from '../../assets';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-36 py-2.5">
      <img src={ logo } alt="Trybe logo" />
      <nav>
        <ul className="flex gap-2.5">
          <li>Home</li>
          <li>History</li>
        </ul>
      </nav>
    </header>
  );
}
