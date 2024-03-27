import { Route, Routes } from 'react-router-dom';
import DataContext from './context/DataContext';
import data from './persistence/PersistenceHelper';
import Home from './pages/Home';
import History from './pages/History';

function App() {
  return (
    <DataContext.Provider value={data}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
