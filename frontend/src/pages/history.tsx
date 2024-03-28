import React from 'react';
import Card from '../components/Card';
import Header from '@/components/Header';
import Headline from '@/components/Headline';
import Footer from '@/components/Footer';
import data from '../../data.json';

const History: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Headline title="histórico" />
        <Card users={data} currentPage="history" />
      </main>
      <Footer />
    </>
  );
};

export default History;
