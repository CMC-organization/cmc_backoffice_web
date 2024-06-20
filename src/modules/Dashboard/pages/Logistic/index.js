import { useState } from 'react';

import Button from '../../../../components/Button';
import Header from '../../../../components/Header';
import SidebarLayout from '../../../../layouts/Desktop/SidebarLayout';
import SearchBar from './Components/SearchBar';
import SwitchManufacturing from './Components/SwitchManufacturing';
import Process from './Components/Process';
import Item from './Components/Item';
import LogistcCard from './Components/LogistcCard';

const Manufacturing = () => {
 const [adm, setAdm] = useState(true);
 const [op, setOp] = useState(false);

 return (
  <SidebarLayout
   content={
    <div>
     <div className='flex flex-col gap-9 mb-10'>
      <Header page='Separação' name='Teste' />
      <div className='w-full flex justify-between items-center'>
       <SearchBar />
       <SwitchManufacturing adm={adm} setAdm={setAdm} op={op} setOp={setOp} />
       <Button name='Cadastrar manual' width={'w-52'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-primar'} type='submit' />
      </div>
      {adm ? (
       <div className='flex flex-col gap-4'>
        <div className='flex gap-6'>
         <Process />
         <div className='w-full flex flex-col gap-4 border border-gray-200 rounded-3xl p-3'>
          <p className='font-bold text-sm'>Principais itens</p>
          <div className='h-28 overflow-y-auto flex flex-col gap-3'>
           <Item />
           <Item />
          </div>
         </div>
        </div>
        <div className='flex flex-col justify-between items-center gap-3'>
         <LogistcCard />
         <LogistcCard />
         <LogistcCard />
        </div>
       </div>
      ) : (
       <div className='flex flex-col justify-between items-center gap-3'>
        <LogistcCard />
        <LogistcCard />
        <LogistcCard />
       </div>
      )}
     </div>
    </div>
   }
  />
 );
};

export default Manufacturing;
