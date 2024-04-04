/* eslint-disable max-len */
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
      <div className="flex justify-center items-center w-full">
        <Container>
          <h2 className="text-4xl font-semibold">
            Como os alunos se destacam?
          </h2>
          <p className="text-lg">
            Os alunos se destacam ao demonstra suas soft skills e
            hard skills através de atitudes em nossa comunidade e
            em projetos pessoais. Veja a seguir o critério para cada premiação ou destaque.
          </p>
          <div className="w-full grid grid-cols-2 max-sm:grid-cols-1 gap-2 p-2">
            {
            seals.map((seal) => (
              <SealCard
                key={ seal.title }
                image={ seal.imageSeal }
                title={ seal.title }
                description={ seal.description }
              />
            ))
          }
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
