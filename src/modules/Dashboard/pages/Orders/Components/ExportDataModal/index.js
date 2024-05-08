import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/fluent-light/theme.css';

import XClose from '../../../../../../images/svg/XClose';

import { useOrders } from '../../../../../../context/OrdersContext';
import Input from '../../../../../../components/Input';
import Button from '../../../../../../components/Button';

const ExportDataModal = () => {
 const { setOpenExport } = useOrders();

 const postFilter = () => {};

 const {
  handleSubmit,
  register,
  formState: { errors },
 } = useForm();

 const clients = [{ name: 'Joao', code: 'Joao' }];

 const [selectedClient, setSelectedClient] = useState(null);
 const [date, setDate] = useState(null);

 return (
  <>
   <div
    className='fixed bg-modal w-screen h-screen top-0 left-0 z-20'
    onClick={() => {
     setOpenExport(false);
    }}
   />
   <div className='w-96 min-h-80 mx-0 bg-offWhite rounded absolute top-28 left-[550px] z-30 px-6 py-6  drop-shadow-md shadow-slate-700'>
    <form onSubmit={handleSubmit(postFilter)}>
     <div className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
       <div
        className='cursor-pointer'
        onClick={() => {
         setOpenExport(false);
        }}
       >
        <XClose />
       </div>
       <p className='text-lg text-black font-medium'>Exportar dados</p>
      </div>
      <Button name='Exportar' width='w-132' height={'h-8'} textColor={'text-white'} backgroundColor='bg-primar' fontSize={'text-sm'} type='submit' />
     </div>
     <div className='min-w-full min-h-[0.5px] my-3 bg-border' />
     <div className='flex flex-col gap-4'>
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
       <p className='text-sm font-medium text-black '>Setor de exportação</p>
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
       <p className='text-sm font-medium text-black '>Tipos de arquivo</p>
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
     </div>
    </form>
   </div>
  </>
 );
};
export default ExportDataModal;
