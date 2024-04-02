import HeadlineProps from '@/types/HeadlineProps';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const Headline: React.FC<HeadlineProps> = ({ title }) => {
  const [dark, setDark] = useState<boolean>(false);
  
  return (

    <div className={`py-16 ${!dark ? 'bg-[#0C6D18]': 'bg-[#1f2937]'}`}>
      <button type="button" onClick={() => setDark(!dark)}>
        <Image
          className='ml-5 rounded-2xl'
          src="https://svgsilh.com/svg/1774834.svg"
          width={50}
          height={100}
          alt="Image svg title"
          title='Dark theme'
        />
      </button>
      <h4 className="flex justify-center items-center py-4 mx-80 text-white underline underline-offset-4">
        EXPLORANDO A CATEGORIA
      </h4>
      <h1 className="flex justify-center items-center text-6xl font-bold my-8 mx-80 text-white uppercase">
        {title}
      </h1>
    </div>

  );
};

export default Headline;
