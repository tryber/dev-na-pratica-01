import { User } from './User';

export interface CardProps {
  users: User[];
  currentPage: 'current' | 'history';
}
