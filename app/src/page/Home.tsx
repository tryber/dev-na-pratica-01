import React from 'react';

import Search from '../components/Search';
import Header from '../components/Hearder';
import data from '../persistence/PersistenceHelper';
import Info from '../components/Info';

function Home(): JSX.Element {
  console.log(data);
  return (
    <div className="container-home">
      <Header />
      <Search />
      <div>
        <Info />
      </div>
    </div>
  );
}

export default Home;
