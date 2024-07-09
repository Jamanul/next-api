import React from 'react';
import Meals from './Meals';

export const metadata = {
    title: "meals page",
    description: "all about meals page",
  };
const MealsPage = () => {
   
    return (
        <div>
            <h2 className='text-3xl'>Meals by search</h2>
            <Meals/>
        </div>
    );
};

export default MealsPage;