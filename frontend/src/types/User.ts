import Achievement from './Achievement';
import Project from './Project';

export default interface User {
  id: number;
  name: string;
  image: string;
  highlight: boolean,
  projects: Project[];
  achievements: Achievement[];
}
