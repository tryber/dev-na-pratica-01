/* eslint-disable max-len */
import seals from '../seals';
import { studentImage } from './images';
import IStudent from './student.interface';

const students: IStudent[] = [
  {
    id: 1,
    name: 'Fulano da Silva',
    image: studentImage,
    class: 'T23',
    stack: 'Front-end',
    networks: {
      github: '',
      linkedin: '',
    },
    seals: [seals[0]],
  },
];

export default students;
