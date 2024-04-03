import { CardDescription, CardTitle } from '../styles';

interface SealCardProps {
  image: string;
  title: string;
  description: string;
}

export default function SealCard({ image, description, title }: SealCardProps) {
  return (
    <section
      className="flex  gap-5 p-2.5 bg-slate-100 rounded-xl min-w-80 max-w-screen-sm"
    >
      <img
        className="min-w-32 max-w-36"
        src={ image }
        alt={ title }
      />
      <div>
        <CardTitle>{ title }</CardTitle>
        <CardDescription>{ description }</CardDescription>
      </div>
    </section>
  );
}
