import { useState } from 'react';
import DataContext from './context/DataContext';
import data from './persistence/PersistenceHelper';

function App() {
  const [count, setCount] = useState(0);

  return (
    <DataContext.Provider value={data}>
      <h1>Destrybers</h1>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        count is
        {' '}
        {count}
        .
      </button>
      <p>{data.map(({ id }) => id)}</p>

    </DataContext.Provider>
  );
}

export default App;
