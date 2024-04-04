/* eslint-disable max-len */
import { useState } from 'react';
import { find } from '../../../../database';
import { IHighlight } from '../../../../database/types';
import { StudentCard } from '../../../../components/Cards';

export default function HomeHighlights() {
  const [highlights] = useState<IHighlight[]>(find('highlights') as IHighlight[]);

  return (
    <section className="bg-slate-200 flex flex-col items-center py-10">
      <div className="w-4/5  text-start mb-5">
        <h2 className="text-4xl font-semibold">
          Destaques deste mês
        </h2>
      </div>

      <div className="w-4/5 flex flex-wrap max-[819px]:w-full gap-2 justify-around p-1">
        {
            highlights.map((highlight) => {
              const { id, title, description, banner, student } = highlight;
              return (
                <StudentCard
                  key={ id }
                  title={ title }
                  description={ description }
                  banner={ banner }
                  name={ student.name }
                  stack={ student.stack }
                  studentImage={ student.image }
                  seals={ student.seals }
                />
              );
            })
          }
      </div>
    </section>
  );
}
