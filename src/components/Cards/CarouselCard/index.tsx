/* eslint-disable max-len */
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
    <div className="bg-slate-50 w-96 max-xl:w-full rounded-xl text-black max-lg:hidden">
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
        <div className="flex max-xl:flex-col items-center gap-2">
          <img className="max-xl:w-20" src={ awardSeal } alt="Award seal" />
          <div>
            <CardTitle>{ title }</CardTitle>
            <p className="text-sm">{ description }</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div
            className="border-2 border-solid border-slate-900 w-4 h-4 rounded-full
             bg-slate-900"
          />
          <div className="border-2 border-solid border-slate-900 w-4 h-4 rounded-full" />
          <div className="border-2 border-solid border-slate-900 w-4 h-4 rounded-full" />
        </div>
      </div>
    </div>
  );
}
