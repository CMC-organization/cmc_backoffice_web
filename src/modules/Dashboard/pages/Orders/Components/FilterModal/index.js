import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Slider } from 'primereact/slider';
// import 'primereact/resources/themes/nova-accent/theme.css';
// import 'primereact/resources/themes/viva-light/theme.css';

import Filter from '.././../../../../../images/svg/Filter';

import { useOrders } from '../../../../../../context/OrdersContext';
import Input from '../../../../../../components/Input';
import Button from '../../../../../../components/Button';

const FilterModal = () => {
 const { handleSubmit, register } = useForm();
 const { openFilter, setOpenFilter, value, setValue, maxPrice, setMaxPrice, minPrice, setMinPrice } = useOrders();

 const postFilter = (data) => {
  console.log(data);
 };

 const handlePrices = (value) => {
  const [proposedMin, proposedMax] = value;
  const minRange = 20;

  if (proposedMin > maxPrice - minRange) {
   setValue([maxPrice - minRange, maxPrice]);
   setMinPrice(maxPrice - minRange);
   setMaxPrice(maxPrice);
  } else if (proposedMax < minPrice + minRange) {
   setValue([minPrice, minPrice + minRange]);
   setMinPrice(minPrice);
   setMaxPrice(minPrice + minRange);
  } else {
   setValue(value);
   setMaxPrice(value[1]);
   setMinPrice(value[0]);
  }
 };

 const clients = [
  { name: 'Joao', code: 'Joao' },
  { name: 'Gustavo', code: 'Gustavo' },
 ];
 const status = [
  { name: 'Joao', code: 'Joao' },
  { name: 'Gustavo', code: 'Gustavo' },
 ];

 const [selectedClient, setSelectedClient] = useState(null);
 const [selectedStatus, setSelectedStatus] = useState(null);
 const [date, setDate] = useState(null);

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
     <div className='w-96 min-h-80 bg-offWhite rounded absolute top-44 z-20 px-6 py-6 drop-shadow-md shadow-slate-700'>
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
      <form onSubmit={handleSubmit(postFilter)} className='flex flex-col gap-4'>
       <div className='flex flex-col gap-2'>
        <p className='text-sm font-medium text-black '>Data</p>
        <div class='caledar_div'>
         <Calendar
          {...register('date')}
          value={date}
          onChange={(e) => setDate(e.value)}
          placeholder='DD/MM/AAAA'
          showIcon
          locale='pt'
          dateFormat='dd/mm/yy'
          className='w-full pl-1.5'
         />
        </div>
       </div>

       <div className='flex flex-col gap-2'>
        <p className='text-sm font-medium text-black '>Cliente</p>
        <Dropdown
         {...register('clients')}
         value={selectedClient}
         onChange={(e) => setSelectedClient(e.value)}
         options={clients}
         optionLabel='name'
         placeholder='Selecione'
         className='w-full md:w-14rem bg-offWhite'
        />
       </div>

       <div className='flex flex-col gap-2'>
        <p className='text-sm font-medium text-black'>Status</p>
        <Dropdown
         {...register('status')}
         value={selectedStatus}
         onChange={(e) => setSelectedStatus(e.value)}
         options={status}
         optionLabel='name'
         placeholder='Selecione'
         className='w-full md:w-14rem bg-offWhite'
        />
       </div>
       <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-3'>
         <p className='text-sm font-medium text-black '>Preço</p>
         <div className='card flex justify-content-center'>
          <Slider value={value} onChange={(e) => handlePrices(e.value)} className='w-14rem bg-gray-300' range />
         </div>
        </div>
        <div className='flex flex-row gap-4 justify-between'>
         <input type='text' disabled value={`R$ ${minPrice},00`} className='border-2 rounded-4 p-2 w-1/2 bg-white' />
         <input type='text' disabled value={`R$ ${maxPrice},00`} className='border-2 rounded-4 p-2 w-1/2 bg-white' />
        </div>
       </div>
       <Button name='Salvar filtros' width='w-100' height={'h-12'} textColor={'text-white'} backgroundColor='bg-primar' type='submit' />
      </form>
     </div>
    </>
   )}
  </div>
 );
};
export default FilterModal;
