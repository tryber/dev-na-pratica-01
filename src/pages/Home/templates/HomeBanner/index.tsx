/* eslint-disable max-len */
import { Carousel, Header } from '../../../../components';
import { LinkIcon } from '../../../../components/buttons';
import facebookIcon from '../../../../assets/icones/icones-brancos/facebook.png';
import instagramIcon from '../../../../assets/icones/icones-brancos/instagram.png';
import linkedinIcon from '../../../../assets/icones/icones-brancos/linkedin.png';
import youtubeIcon from '../../../../assets/icones/icones-brancos/youtube.png';

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
          <div className="flex items-center max-sm:justify-center justify-start gap-3 mt-5">
            <LinkIcon
              url="https://www.instagram.com/betrybe"
              target="_blank"
              icon={ instagramIcon }
              alt="Instagram"
            />
            <LinkIcon
              url="https://www.facebook.com/betrybe"
              target="_blank"
              icon={ facebookIcon }
              alt="Facebook"
            />
            <LinkIcon
              url="https://www.linkedin.com/school/betrybe/"
              target="_blank"
              icon={ linkedinIcon }
              alt="LinkedIn"
            />
            <LinkIcon
              url="https://www.youtube.com/channel/UCZeN5eLUwiIyMaQjKR_ydVg"
              target="_blank"
              icon={ youtubeIcon }
              alt="YouTube"
            />
          </div>
        </div>
        <Carousel />
      </div>
    </section>
  );
}
