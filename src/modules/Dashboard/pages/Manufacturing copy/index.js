import { useState } from 'react';

import Button from '../../../../components/Button';
import Header from '../../../../components/Header';
import SidebarLayout from '../../../../layouts/Desktop/SidebarLayout';
import SearchBar from './Components/SearchBar';
import SwitchManufacturing from './Components/SwitchManufacturing';

const Manufacturing = () => {
 const [adm, setAdm] = useState(true);
 const [op, setOp] = useState(false);

 return (
  <SidebarLayout
   content={
    <div>
     <div className='flex flex-col gap-9'>
      <Header page='Clientes' name='Teste' />
      <div className='w-full flex justify-between items-center'>
       <SearchBar />
       <SwitchManufacturing adm={adm} setAdm={setAdm} op={op} setOp={setOp} />
       <Button name='Cadastrar manual' width={'w-52'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-primar'} type='submit' />
      </div>
     </div>
    </div>
   }
  />
 );
};

export default Manufacturing;
