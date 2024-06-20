import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button';
import Header from '../../../../components/Header';
import SidebarLayout from '../../../../layouts/Desktop/SidebarLayout';
import SearchBar from './Components/SearchBar';
import SwitchManufacturing from './Components/SwitchManufacturing';
import Process from './Components/Process';
import Goals from './Components/Goals';
import CardManufacturing from './Components/CardManufacturing';
import ActionsModal from './Components/Modals/ActionsModal';
import { useManufacturing } from '../../../../context/ManufacturingContext';
import DeleteManufacturingModal from './Components/Modals/DeleteManufacturingModal';

const Manufacturing = () => {
 const navigate = useNavigate();

 const [adm, setAdm] = useState(true);
 const [op, setOp] = useState(false);

 const { openDelete, openActions } = useManufacturing();

 return (
  <SidebarLayout
   content={
    <div>
     <div className='flex flex-col gap-9 mb-10'>
      <Header page='Fabricação' name='Teste' />
      <div className='w-full flex justify-between items-center'>
       <SearchBar filter />
       <SwitchManufacturing adm={adm} setAdm={setAdm} op={op} setOp={setOp} />
       <Button
        name='Cadastrar manual'
        width={'w-52'}
        height={'h-12'}
        textColor={'text-white'}
        backgroundColor={'bg-primar'}
        type='submit'
        onClick={() => {
         navigate('/manufacturing/create');
        }}
       />
      </div>
      {adm ? (
       <div className='flex flex-col gap-4'>
        <div className='flex gap-6'>
         <Process />
         <Goals />
        </div>
        <div className='flex flex-col gap-4'>
         <div className='flex flex-col gap-4'>
          <p className='text-base font-medium text-black'>Região 1</p>
          <div className='flex justify-between items-center'>
           <CardManufacturing />
           <CardManufacturing />
           <CardManufacturing />
          </div>
         </div>
         <div className='flex flex-col gap-4'>
          <p className='text-base font-medium text-black'>Região 2</p>
          <div className='flex justify-between items-center'>
           <CardManufacturing />
           <CardManufacturing />
           <CardManufacturing />
          </div>
         </div>
        </div>
       </div>
      ) : (
       <div className='flex justify-between items-center'>
        <CardManufacturing />
        <CardManufacturing />
        <CardManufacturing />
       </div>
      )}
     </div>
     {openActions && <ActionsModal />}
     {openDelete && <DeleteManufacturingModal />}
    </div>
   }
  />
 );
};

export default Manufacturing;
