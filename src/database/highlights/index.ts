/* eslint-disable max-len */
import seals from '../seals';
import students from '../students';
import IHighlight from './highlights.interface';
import { goldKeyboard } from './images';

const highlights: IHighlight[] = [
  {
    id: 1,
    title: 'Premio Teclado de Ouro',
    description: 'O aluno que mais se destacou em soft skills e hard skills no modulo de front-end',
    banner: goldKeyboard,
    student: students[0],
    seal: seals[0],
  },
  {
    id: 2,
    title: 'Projeto da Comunidade',
    description: 'O aluno desenvolveu um projeto que impactou a comunidade',
    banner: goldKeyboard,
    student: students[1],
    seal: seals[2],
  },
  {
    id: 3,
    title: 'Teclado de Ouro',
    description: 'O aluno que mais se destacou em soft skills e hard skills no modulo de back-end',
    banner: goldKeyboard,
    student: students[0],
    seal: seals[0],
  },
  {
    id: 4,
    title: 'Projeto da Comunidade',
    description: 'O aluno desenvolveu um projeto que impactou a comunidade',
    banner: goldKeyboard,
    student: students[1],
    seal: seals[2],
  },
  {
    id: 5,
    title: 'Teclado de Ouro',
    description: 'O aluno que mais se destacou em soft skills e hard skills',
    banner: goldKeyboard,
    student: students[0],
    seal: seals[0],
  },
  {
    id: 6,
    title: 'Premio Teclado de Ouro',
    description: 'O aluno que mais se destacou em soft skills e hard skills no modulo de front-end',
    banner: goldKeyboard,
    student: students[1],
    seal: seals[0],
  },
  {
    id: 7,
    title: 'Teclado de Ouro',
    description: 'O aluno que mais se destacou em soft skills e hard skills',
    banner: goldKeyboard,
    student: students[0],
    seal: seals[0],
  },
];

export default highlights;
