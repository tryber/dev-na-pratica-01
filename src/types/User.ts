import Achievement from './Achievement';
import Project from './Project';

export interface User {
  id: number;
  name: string;
  image: string;
  highlight: boolean;
  about: string;
  phrase: string;
  date:string;
  linkedin: string;
  projects: Project[];
  achievements: Achievement[];
}

export interface CardItemProps {
  user: User;
}
