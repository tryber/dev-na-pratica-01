import React from 'react';
import Card from '../components/Card';
import Header from '@/components/Header';
import Headline from '@/components/Headline';
import Footer from '@/components/Footer';
import data from '../../data.json';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Headline title="destaques do mês" />
        <Card users={data} currentPage="current" />
        <div className="mt-32">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
