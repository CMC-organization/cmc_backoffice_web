import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Slider } from 'primereact/slider';

import Filter from '.././../../../../../images/svg/Filter';

import { useOrders } from '../../../../../../context/OrdersContext';
import Input from '../../../../../../components/Input';
import Button from '../../../../../../components/Button';

const FilterModal = () => {
 const { openFilter, setOpenFilter } = useOrders();

 const postFilter = () => {};

 const {
  handleSubmit,
  register,
  formState: { errors },
 } = useForm();

 const clients = [{ name: 'Joao', code: 'Joao' }];

 const [selectedClient, setSelectedClient] = useState(null);
 const [date, setDate] = useState(null);
 const [value, setValue] = useState([20, 80]);

 return (
  <div className='flex flex-col gap-3'>
   <div
    className='border border-gray-200 rounded-md p-2.5 cursor-pointer z-20'
    onClick={() => {
     setOpenFilter(!openFilter);
    }}
   >
    <Filter />
   </div>
   {openFilter && (
    <>
     <div
      className='fixed bg-modal w-screen h-screen top-0 left-0 z-10'
      onClick={() => {
       setOpenFilter(false);
      }}
     />
     <div className='w-96 min-h-80 bg-offWhite rounded absolute top-44 z-20 px-6 py-6  drop-shadow-md shadow-slate-700'>
      <div className='flex items-center justify-between'>
       <p className='text-lg text-black font-medium'>Filtros</p>
       <Button
        name='Limpar filtros'
        width='w-132'
        height={'h-8'}
        textColor={'text-black'}
        backgroundColor='bg-offWhite'
        fontSize={'text-sm'}
        type='submit'
       />
      </div>
      <div className='min-w-full min-h-[0.5px] my-3 bg-border' />
      <form onSubmit={handleSubmit(postFilter)} className='flex flex-col'>
       <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />

       <Dropdown
        value={selectedClient}
        onChange={(e) => setSelectedClient(e.value)}
        options={clients}
        optionLabel='name'
        placeholder='Cliente'
        className='w-full md:w-14rem'
       />
       <Dropdown
        value={selectedClient}
        onChange={(e) => setSelectedClient(e.value)}
        options={clients}
        optionLabel='name'
        placeholder='Status'
        className='w-full md:w-14rem'
       />
       <div className='card flex justify-content-center'>
        <p>Preço</p>
        <Slider value={value} onChange={(e) => setValue(e.value)} className='w-14rem' range />
       </div>

       <div className='flex justify-between pt-4'>
        <Button name='Salvar filtros' width='w-100' height={'h-12'} textColor={'text-white'} backgroundColor='bg-primar' type='submit' />
       </div>
      </form>
     </div>
    </>
   )}
  </div>
 );
};
export default FilterModal;
