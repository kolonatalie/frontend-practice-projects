import React from 'react';
import Tour from './Tour';
import { Tour as TourType } from './types';

interface ToursProps {
  tours: TourType[];
  removeTour: (id: string) => void;
}

const Tours: React.FC<ToursProps> = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
