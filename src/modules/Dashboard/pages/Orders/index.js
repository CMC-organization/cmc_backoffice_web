import { useEffect, useState } from 'react';

import Button from '../../../../components/Button';
import FloatingScroll from '../../../../components/FloatingScroll';
import Header from '../../../../components/Header';
import SidebarLayout from '../../../../layouts/Desktop/SidebarLayout';
import OrdersCard from './Components/OrdersCard';
import SearchBar from './Components/SearchBar';
import ExportDataModal from './Components/ExportDataModal';
import { useOrders } from '../../../../context/OrdersContext';

const Orders = () => {
 const [listItens, setListItens] = useState([]);
 const { openExport, setOpenExport } = useOrders();

 let div = document.getElementById('test');

 const syncScroll = () => {
  div = document.getElementById('test');

  // Iterar sobre os elementos do loop e definir o scroll esquerdo igual ao do elemento principal
  if (listItens && listItens.length) {
   listItens.forEach((item) => {
    let divLoop = document.getElementById(item);
    console.log(divLoop, 8080);

    if (divLoop) {
     divLoop.scrollLeft = div.scrollLeft;

     console.log(item);
    }
   });
  }
 };

 useEffect(() => {
  const div = document.getElementById('test');
  if (div && listItens) {
   div.addEventListener('scroll', syncScroll);
  }

  return () => {
   if (div) {
    div.removeEventListener('scroll', syncScroll);
   }
  };
 }, [listItens]);

 return (
  <SidebarLayout
   content={
    <div className='w-full flex flex-col gap-9'>
     <div className='flex flex-col gap-9'>
      <Header page='Pedidos' name='Teste' />
      <div className='w-full flex justify-between'>
       <SearchBar />
       <Button
        name='Exportar dados'
        width='w-[190px]'
        height={'h-12'}
        textColor={'text-white'}
        backgroundColor='bg-primar'
        type='submit'
        onClick={() => {
         setOpenExport(true);
        }}
       />
      </div>
     </div>
     <div className='min-w-full max-w-full max-h-[480px] overflow-x-hidden overflow-y-auto flex flex-col gap-4 pr-4 pb-16'>
      <OrdersCard setListItens={setListItens} />
      <OrdersCard setListItens={setListItens} />
      <OrdersCard setListItens={setListItens} />
      <FloatingScroll width={'2300px'} />
     </div>
     {openExport && <ExportDataModal />}
    </div>
   }
  />
 );
};
export default Orders;
