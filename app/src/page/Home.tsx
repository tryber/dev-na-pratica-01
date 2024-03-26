import React from 'react';
import Header from '../components/Hearder';
import data from '../persistence/PersistenceHelper';

function Home(): JSX.Element {
  console.log(data);
  return (
    <>
      <Header />
      <div>
        <h1>Hello</h1>
        <h1>World</h1>
      </div>
    </>
  );
}

export default Home;
