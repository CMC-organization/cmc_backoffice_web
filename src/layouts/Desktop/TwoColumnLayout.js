import React from 'react';

const TwoColumnLayout = ({ column1, column2 }) => {
 return (
  <div className='flex w-1/1 h-screen items-center px-4 lg:mx-12 xl:mx-16 max-w-screen-2xl mx-auto'>
   <div className='flex w-6/12 h-screen justify-end px-4'>{column1}</div>
   <div className='flex flex-col w-6/12 justify-center h-screen px-4 ml-12 max-w-screen-sm'>{column2}</div>
  </div>
 );
};

export default TwoColumnLayout;
