import { CardTitle } from '../styles';

interface CarouselCardProps {
  studentPhoto: string;
  name: string;
  stack: string;
  awardSeal: string;
  title: string;
  description: string;
}

export default function CarouselCard(
  { studentPhoto, name, stack, awardSeal, title, description }: CarouselCardProps,
) {
  return (
    <div className="bg-slate-50 w-96 rounded-xl text-black">
      <img
        className="rounded-t-xl w-full h-60 object-cover"
        src={ studentPhoto }
        alt="Student"
      />
      <div className="flex flex-col gap-5 p-2.5">
        <div>
          <p className="text-xl">{name}</p>
          <p className="text-sm">{stack}</p>
        </div>
        <div className="flex gap-2">
          <img
            className="w-32 h-32 object-cover rounded-full"
            src={ awardSeal }
            alt="Award seal"
          />
          <div>
            <CardTitle>{ title }</CardTitle>
            <p className="text-sm">{ description }</p>
          </div>
        </div>
      </div>
    </div>
  );
}
