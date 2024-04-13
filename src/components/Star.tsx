import React, { useState } from 'react';
import { TStar, StarProps } from '../types/Stars';

// componente que recebe as notas dos usuários ao clicar nas estrelas
const Star: React.FC<StarProps> = ({ selected, onClick }) => (
  <span
    className={`text-3xl cursor-pointer ${selected ? 'text-yellow-500' : 'text-gray-800'
      }`}
    onClick={onClick}
  >
    ★
  </span>
);

const StarRating: React.FC<TStar> = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState<number>(0);

  const handleStarClick = (index: number) => {
    setSelectedStars(index + 1);
  };

  return (
    <div className='flex flex-col'>
      <div className="flex items-center">
        {[...Array(totalStars)].map((_, index) => (
          <Star
            key={index}
            selected={index < selectedStars}
            onClick={() => handleStarClick(index)}
          />
        ))}
      </div>
      <p className="ml-1 text-white">Você avaliou com {selectedStars} estrelas.</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <span className="font-bold">Dê sua nota:</span>
      <StarRating totalStars={5} />
    </div>
  );
};

export default App;
