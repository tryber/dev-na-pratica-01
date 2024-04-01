import { Carousel, Header } from '../../../../components';

export default function HomeBanner() {
  return (
    <section
      className="bg-gradient-to-t from-green-600 to-green-900 text-white px-36 pb-10"
    >
      <Header />
      <div className="flex justify-center items-center gap-x-24">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-2.5">
            Bem vindo, ao Trybe talentos!
          </h1>
          <p className="text-xl">
            Veja nossos alunos destaques, estes que demonstrarão suas qualidade
            e pontos fortes ao colaborar com nossa comunidade.
          </p>
        </div>
        <Carousel />
      </div>
    </section>
  );
}
