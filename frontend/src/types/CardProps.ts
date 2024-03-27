import User from './User';

export default interface CardProps {
  users: User[];
  currentPage: 'current' | 'history';
}
