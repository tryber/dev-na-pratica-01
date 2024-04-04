/* eslint-disable max-len */
import seals from '../seals';
import { studentImage, studentPhoto } from './images';
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
  {
    id: 1,
    name: 'Julho Junior',
    image: studentPhoto,
    class: 'T23',
    stack: 'Back-end',
    networks: {
      github: '',
      linkedin: '',
    },
    seals: [seals[0], seals[2]],
  },
];

export default students;
