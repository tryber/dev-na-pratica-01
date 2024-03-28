import React, { useState } from 'react';
import { TStar, StarProps } from '../types/Stars';

const Star: React.FC<StarProps> = ({ selected, onClick }) => (
  <span
    className={`text-3xl cursor-pointer ${
      selected ? 'text-yellow-500' : 'text-gray-400'
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
    <div className="flex flex-col">
      <div className="flex items-center">
        {[...Array(totalStars)].map((_, index) => (
          <Star
            key={index}
            selected={index < selectedStars}
            onClick={() => handleStarClick(index)}
          />
        ))}
      </div>
      <p className="ml-1 text-white">
        Você avaliou com {selectedStars} estrelas.
      </p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dê sua nota:</h1>
      <StarRating totalStars={5} />
    </div>
  );
};

export default App;
