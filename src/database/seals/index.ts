/* eslint-disable max-len */
import { certificateOfExcellence, charlesFadelAward, featuredProject, goldKeyboardSeal, margaretHamiltonAward } from './images';
import ISeal from './seal.interface';

const seals: ISeal[] = [
  {
    id: 1,
    title: 'Premio Teclado de Ouro',
    description: 'Pessoa que recebeu este selo, foi a que mais se destacou em soft skills e hard skills no módulo de front-end ou back-end, na sua turma durante a formação.',
    imageSeal: goldKeyboardSeal,
  },
  {
    id: 2,
    title: 'Certificado de excelência',
    description: 'Pessoa que recebeu este selo, tirou 100% em todos os projetos do módulo.',
    imageSeal: certificateOfExcellence,
  },
  {
    id: 3,
    title: 'Projeto destaque',
    description: 'Pessoa que recebeu este selo, teve uma ideia e botou em prática desenvolvendo um projeto que se destacou na nossa comunidade.',
    imageSeal: featuredProject,
  },
  {
    id: 4,
    title: 'Prêmio Charles Fadel',
    description: 'Pessoa que recebeu este selo, destacou suas habilidades socioemocionais (soft skills) duranta a formação.',
    imageSeal: charlesFadelAward,
  },
  {
    id: 5,
    title: 'Prêmio Margareth Hamilton',
    description: 'Pessoa que recebeu este selo, se destacou em hard skills durante a formação.',
    imageSeal: margaretHamiltonAward,
  },
];

export default seals;
