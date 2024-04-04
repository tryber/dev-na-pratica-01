/* eslint-disable max-len */
import { Carousel, Header } from '../../../../components';

export default function HomeBanner() {
  return (
    <section
      className="flex flex-col items-center bg-gradient-to-t from-green-600 to-green-900 max-sm:text-center text-white max-sm:px-8 px-36 pb-10"
    >
      <Header />
      <div className="flex max-lg:flex-col max-lg:gap-4 max-xl:flex-row items-center gap-x-24">
        <div className="max-sm:w-screen max-sm:px-4 md:max-w-xl">
          <h1 className="max-sm:text-4xl text-6xl font-bold mb-2.5">
            Bem vindo, ao Trybe talentos!
          </h1>
          <p className="text-lg">
            Veja nossos alunos destaques, estes que demonstrarão suas qualidade
            e pontos fortes ao colaborar com nossa comunidade.
          </p>
        </div>
        <Carousel />
      </div>
    </section>
  );
}
