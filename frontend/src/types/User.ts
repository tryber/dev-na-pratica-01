import Achievement from './Achievement';
import Project from './Project';

export default interface User {
  id: number;
  name: string;
  image: string;
  projects: Project[];
  achievements: Achievement[];
}
