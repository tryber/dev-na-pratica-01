import { createContext } from 'react';
import Post from '../types/PostType';

const DataContext = createContext([] as Post[]);

export default DataContext;
