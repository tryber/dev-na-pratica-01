import { createContext } from 'react';
import Post from '../types/PostType';

const DataContext = createContext<Post[]>([]);

export default DataContext;
