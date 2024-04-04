import ISeal from '../seals/seal.interface';

export default interface IStudent {
  id: number;
  name: string;
  stack: string;
  image: string;
  class: string;
  networks: {
    github: string;
    linkedin: string;
  };
  seals: ISeal[];
}
