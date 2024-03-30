import { goldKeyboardSeal, studentPhoto } from '../../assets';
import CarouselCard from '../CarouselCard';

export default function Carousel() {
  return (
    <CarouselCard
      studentPhoto={ studentPhoto }
      name="Julho Junior"
      stack="Desenvolvedor back-end"
      awardSeal={ goldKeyboardSeal }
      title="Teclado de Ouro"
      description="Conseguiu implementar uma nova funcionalidade em apenas 1 dia"
    />
  );
}
