import React from 'react';

import Search from '../components/Search';
import Header from '../components/Hearder';
import data from '../persistence/PersistenceHelper';

function Home(): JSX.Element {
  console.log(data);
  return (
    <>
      <Header />
      <Search />
      <div>
        <h1>Hello</h1>
        <h1>World</h1>
      </div>
    </>

  );
}

export default Home;
