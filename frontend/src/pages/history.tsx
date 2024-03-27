import React from 'react';
import Card from '../components/Card';
import Header from '@/components/Header';
import Headline from '@/components/Headline';
import Footer from '@/components/Footer';
import data from '../../data.json';

const History: React.FC = () => {
  return (
    <div>
      <Header />
      <Headline title="histórico" />
      <Card users={data} currentPage="history" />
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default History;
