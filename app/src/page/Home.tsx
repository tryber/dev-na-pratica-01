import React from 'react';

import Search from '../components/Search';
import Header from '../components/Hearder';
import data from '../persistence/PersistenceHelper';
import Highlight from '../components/Highlight';

function Home(): JSX.Element {
  console.log(data);
  return (
    <div className="container-home">
      <Header />
      <Search />
      <div>
        <h1>Destaques do mês</h1>
        {data.map((post) => <Highlight key={post.id} post={post} />)}
      </div>
    </div>
  );
}

export default Home;
