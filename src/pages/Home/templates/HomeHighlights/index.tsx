import { useState } from 'react';
import { find } from '../../../../database';
import { IHighlight } from '../../../../database/types';
import { StudentCard } from '../../../../components/Cards';

export default function HomeHighlights() {
  const [highlights] = useState<IHighlight[]>(find('highlights') as IHighlight[]);

  return (
    <section className="py-10 px-36 bg-slate-100">
      <h2
        className="text-4xl font-semibold"
      >
        Destaques deste mês
      </h2>

      <div className="flex flex-wrap gap-2">
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
