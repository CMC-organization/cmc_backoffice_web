import React from 'react';
import Sidebar from '../../components/Sidebar';

const SidebarLayout = ({ content }) => {
 return (
  <div className='flex w-full h-screen lg:mx-12 xl:mx-16 max-w-screen-2xl mx-auto'>
   <div className='flex flex-col w-2/12 h-screen px-3'>
    <Sidebar />
   </div>
   <div className='flex flex-col w-[83%] h-screen px-4 py-12'>{content}</div>
  </div>
 );
};

export default SidebarLayout;
