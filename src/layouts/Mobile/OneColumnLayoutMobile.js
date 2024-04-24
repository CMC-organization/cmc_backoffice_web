import React from 'react';

const OneColumnLayoutMobile = ({ column1 }) => {
 return <div className='flex flex-col w-1/1 h-full justify-center my-5 px-8 sm:px-24 md:px-28 max-w-2xl mx-auto'>{column1}</div>;
};

export default OneColumnLayoutMobile;
