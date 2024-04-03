import ISeal from '../../../database/seals/seal.interface';
import { CardDescription, CardTitle } from '../styles';

interface StudentCardProps {
  name: string;
  stack: string;
  studentImage: string;
  title: string;
  description: string;
  banner: string;
  seals: ISeal[];
}

export default function StudentCard(
  { name, stack, studentImage, title, description, banner, seals }: StudentCardProps,
) {
  return (
    <section
      className=" border border-1 border-white
       bg-white rounded-xl min-w-72 max-w-80"
    >
      <img
        className="w-full object-cover rounded-t-xl"
        src={ banner }
        alt={ title }
      />
      <div className="p-3">
        <div className="mb-3 min-h-28">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="flex gap-2">
          <img
            className="rounded-full object-cover w-20 h-20"
            src={ studentImage }
            alt={ name }
          />
          <div>
            <p className="text-xl">{ name }</p>
            <p className="text-sm">{ stack }</p>
            <div className="flex gap-1">
              {
                [
                  ...seals.map((seal) => (
                    <img
                      key={ seal.title }
                      className="w-7 h-7"
                      src={ seal.imageSeal }
                      alt={ seal.title }
                    />
                  )),
                  <div
                    key="circle1"
                    className="border-2 border-slate-300 rounded-full w-7 h-7"
                  />,
                  <div
                    key="circle2"
                    className="border-2 border-slate-300 rounded-full w-7 h-7"
                  />,
                  <div
                    key="circle3"
                    className="border-2 border-slate-300 rounded-full w-7 h-7"
                  />,
                ].slice(0, 3)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
