import { useCallback, useEffect, useState } from 'react';
import CarouselCard from '../Cards/CarouselCard';
import { find } from '../../database';
import { IHighlight } from '../../database/types';

export default function Carousel() {
  const [highlights] = useState<IHighlight[]>(find('highlights') as IHighlight[]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % highlights.length);
  }, [highlights.length]);

  const handlePrevious = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + highlights.length) % highlights.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => { handleNext(); }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const {
    title,
    description,
    seal: { imageSeal },
    student: {
      name,
      image,
      stack,
    },
  } = highlights[activeIndex];
  return (
    <div className="bg-slate-50 rounded-2xl">
      <CarouselCard
        studentPhoto={ image }
        name={ name }
        stack={ stack }
        awardSeal={ imageSeal }
        title={ title }
        description={ description }
      />
      <div className="flex justify-center items-center gap-1 p-3">
        <button
          type="button"
          className="border-2 border-solid border-slate-900 w-4 h-4 rounded-full"
          aria-label="Button"
          onClick={ handlePrevious }
        />
        <div
          className="border-2 border-solid border-slate-900 w-4 h-4 rounded-full
             bg-slate-900"
        />
        <button
          type="button"
          className="border-2 border-solid border-slate-900 w-4 h-4 rounded-full"
          aria-label="Button"
          onClick={ handleNext }
        />
      </div>
    </div>
  );
}
