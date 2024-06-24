import { useForm } from 'react-hook-form';

import Filter from '../../../../../../../images/svg/Filter';

import { useLogistc } from '../../../../../../../context/LogistcContext';
import Button from '../../../../../../../components/Button';
import InputCalendar from '../../../../../../../components/InputCalendar';

const FilterModal = () => {
 const { openFilter, setOpenFilter } = useLogistc();

 const { handleSubmit, control } = useForm({
  defaultValues: {
   dateStart: '',
   dateEnd: '',
  },
 });

 const onSubmit = (data) => {
  console.log(data);
 };

 const clients = [
  { name: 'Joao', code: 'Joao' },
  { name: 'Gustavo', code: 'Gustavo' },
 ];
 const status = [
  { name: 'Ok', code: 'OK' },
  { name: 'Error', code: 'Err' },
 ];

 return (
  <div className='flex flex-col gap-3'>
   <div
    className='border border-gray-200 bg-white rounded-md p-2.5 cursor-pointer z-20'
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
     <div className='w-96  bg-offWhite shadow-slate-700 drop-shadow-md p-6 rounded absolute top-44 z-20 overflow-y-auto'>
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
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
       <InputCalendar label='Data inicio' name='dateStart' control={control} placeholder='DD/MM/AAAA' />
       <InputCalendar label='Data fim' name='dateEnd' control={control} placeholder='DD/MM/AAAA' />

       <Button name='Salvar filtros' width='w-100' height={'h-12'} textColor={'text-white'} backgroundColor='bg-primar' type='submit' />
      </form>
     </div>
    </>
   )}
  </div>
 );
};
export default FilterModal;
