import { useContext, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Search from '../components/Search';
import DataContext from '../context/DataContext';
import Highlight from '../components/Highlight';
import Post from '../types/PostType';

function Home() {
  const [searchParams] = useSearchParams();
  const data = useContext(DataContext);
  const filtered = useMemo(
    () => {
      const month = (new Date().getMonth() + 1).toString();
      const searchFields = [...searchParams.entries(), ['date', month]];
      return searchFields.reduce<Post[]>(
        (acc, [key, val]) => acc.filter(
          ({ [key]: v }) => {
            if (Array.isArray(v)) return v.includes(val);// tags
            if (typeof v === 'object' && 'month' in v) return v.month === Number(val);// data
            if (typeof v === 'number') return v === Number(val);// id
            if (typeof v === 'string') return v.includes(val);// strings
            return false;
          },
        ),
        [...data],
      );
    },
    [data, searchParams],
  );
  return (
    <>
      <Header />
      <Search />
      <h2>Home</h2>
      <h1>Destrybers</h1>
      <div>
        <h1>Destaques do mês</h1>
        {filtered.map((post) => <Highlight key={post.id} post={post} />)}
      </div>
    </>
  );
}

export default Home;
