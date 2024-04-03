import { useState } from 'react';
import { Footer, SealCard } from '../../components';
import { find } from '../../database';
import { Container } from '../../styles/components';
import ISeal from '../../database/seals/seal.interface';
import { HomeBanner, HomeHighlights } from './templates';

export default function Home() {
  const [seals] = useState<ISeal[]>(find('seals') as ISeal[]);

  return (
    <>
      <HomeBanner />
      <HomeHighlights />
      <Container>
        <h2 className="text-4xl font-semibold">
          Como os alunos se destacam?
        </h2>
        <p className="text-lg">
          Os alunos se destacam ao demonstra suas soft skills e
          hard skills através de atitudes em nossa comunidade e
          em projetos pessoais. Veja a seguir o critério para cada premiação ou destaque.
        </p>
        <div className="flex flex-wrap gap-2">
          {
            seals.map((seal) => (
              <SealCard
                key={ seal.title }
                image={ seal.image }
                title={ seal.title }
                description={ seal.description }
              />
            ))
          }
        </div>
      </Container>
      <Footer />
    </>
  );
}
