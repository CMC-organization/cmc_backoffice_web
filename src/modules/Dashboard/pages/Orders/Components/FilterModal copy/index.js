import { useForm } from 'react-hook-form';

import Filter from '../../../../../../images/svg/Filter';

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

 return (
  <div className='flex flex-col gap-3'>
   <div
    className='border border-gray-200 rounded-md p-2.5 cursor-pointer z-50'
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
     <div className='w-96 min-h-80 bg-offWhite rounded absolute top-44 z-50 px-6 py-6'>
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
       <Input
        label='Data'
        error={errors.email}
        placeholder='Selecione'
        validate={{
         pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          message: 'Data inválida!',
         },
        }}
        registerKey={'date'}
        register={register}
       />

       <Input
        label='Cliente'
        error={errors.email}
        placeholder='Selecione'
        validate={{
         pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          message: 'Data inválida!',
         },
        }}
        registerKey={'date'}
        register={register}
       />
       <Input
        label='Status'
        error={errors.email}
        placeholder='Selecione'
        validate={{
         pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          message: 'Data inválida!',
         },
        }}
        registerKey={'date'}
        register={register}
       />

       <div className='flex justify-between pt-4'>
        <Button name='Entrar' width='w-100' height={'h-12'} textColor={'text-white'} backgroundColor='bg-primar' type='submit' />
       </div>
      </form>
     </div>
    </>
   )}
  </div>
 );
};
export default FilterModal;
