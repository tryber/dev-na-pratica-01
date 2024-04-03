import { Link } from 'react-router-dom';

interface RouteButtonProps {
  text: string;
  path: string;
}

export default function RouteButton({ text, path }: RouteButtonProps) {
  return (
    <Link
      className="py-1 px-2 hover:bg-gray-200 hover:bg-opacity-50"
      to={ path }
    >
      {text}
    </Link>
  );
}
