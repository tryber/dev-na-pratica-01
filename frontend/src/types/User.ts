import Achievement from './Achievement';
import Project from './Project';

export interface User {
  id: number;
  name: string;
  image: string;
  highlight: boolean,
  projects: Project[];
  achievements: Achievement[];
}

export interface CardItemProps {
  user: User;
}
