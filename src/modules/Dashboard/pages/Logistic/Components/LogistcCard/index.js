import { useState } from 'react';

import ArrowUp from '../../../../../../images/svg/ArrowUp';
import ArrowDown from '../../../../../../images/svg/ArrowDown';

import ItemCard from '../ItemCard';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const LogistcCard = () => {
 const [open, setOpen] = useState(false);

 return (
  <div className='w-full border border-gray-200 rounded-md p-4 flex flex-col'>
   <div className='flex items-center gap-4 justify-between'>
    {open ? (
     <div
      className='cursor-pointer'
      onClick={() => {
       setOpen(!open);
      }}
     >
      <ArrowUp />
     </div>
    ) : (
     <div
      className='cursor-pointer'
      onClick={() => {
       setOpen(!open);
      }}
     >
      <ArrowDown />
     </div>
    )}
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-xs font-medium text-black'>Mateus</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>Responsável separação</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>#1015</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>Pedido</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>04/12/2023</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>Data do pedido</p>
    </div>
    <div className='flex flex-col items-center gap-1 w-fit'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>GOPN ARTIFICIAL INTELLIGENCE LTDA</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>CNPJ: 54.218.535/0001-62</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>32</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>N° itens</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>12</p>
     <p className='whitespace-nowrap text-xs font-medium text-font'>Aguardando fabricar</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>20</p>
     <p className='whitespace-nowrap text-xs font-medium text-font'>QTD Separada</p>
    </div>
    <div className='w-10 ml-3'>
     <CircularProgressbar
      value={60}
      text={`${60}%`}
      styles={buildStyles({
       pathColor: '#C40024',
       textColor: '#C40024',
       trailColor: '#FFBDC7',
       rotation: 0.5,
      })}
     />
    </div>
   </div>
   {open && (
    <div className='w-full overflow-x-auto pb-3'>
     <div className='w-full h-[0.5px] bg-border mt-6 mb-6' />
     <div className='flex flex-col'>
      <div className='flex flex-col gap-3'>
       <p className='text-base font-medium text-black'>Itens do pedido</p>
       <div className='flex'>
        <ItemCard />
        <div className='min-w-[0.5px] min-h-100 bg-border mr-10 ml-10' />
        <ItemCard />
        <div className='min-w-[0.5px] min-h-100 bg-border mr-10 ml-10' />
        <ItemCard />
       </div>
      </div>
     </div>
    </div>
   )}
  </div>
 );
};
export default LogistcCard;
