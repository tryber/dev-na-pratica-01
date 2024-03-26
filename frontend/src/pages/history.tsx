import React from 'react';
import Link from 'next/link';
import data from '../../historyData.json';
import Image from 'next/image';
import User from '@/types/User';
import Project from '@/types/Project';
import Achievement from '@/types/Achievement';
import Header from '@/components/Header';
import Headline from '@/components/Headline';
import Footer from '@/components/Footer';
import Cart from '@/components/Card';


const History: React.FC = () => {
  return (
    <div>
      <Header />
      <Headline title='histórico' />
      <Cart users={data} />
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  )
}

export default History;