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
      <div className='bg-gradient-to-br from-[#184327] via-[#141517] to-[#184327] w-full h-full'>
        <Headline title="histórico" />
        <Card users={data} currentPage="history" />
        <div className="mt-32">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default History;
