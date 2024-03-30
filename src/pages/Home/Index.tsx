import { Footer, HomeBanner } from '../../components';

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <section className="py-10 px-36">
        <h2
          className="text-4xl font-semibold"
        >
          Destaques deste mês
        </h2>
      </section>
      <section className="py-10 px-36">
        <h2 className="text-4xl font-semibold">
          Como os alunos se destacam?
        </h2>
        <p className="text-lg">
          Os alunos se destacam ao demonstra suas soft skills e
          hard skills através de atitudes em nossa comunidade e
          em projetos pessoais. Veja a seguir o critério para cada premiação ou destaque.
        </p>
      </section>
      <Footer />
    </div>
  );
}
