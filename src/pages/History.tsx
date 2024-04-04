import { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import DataContext from '../context/DataContext';

function History() {
  const data = useContext(DataContext);

  const allMonths = useMemo(
    () => Array.from(new Set(data.reduce<string[]>(
      (acc, { date: { month, year } }) => [...acc, `${month}-${year}`],
      [],
    ))),
    [data],
  );

  return (
    <>
      <Header />
      <h1>History</h1>
      <nav>
        <ul>
          {allMonths.map((m) => (
            <li key={m}>
              <Link to={{ pathname: '/home', search: `date=${m}` }}>
                {m.replace('-', '/')}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default History;
