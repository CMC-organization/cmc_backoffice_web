import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { Slider } from 'primereact/slider';

import Filter from '../../../../../../../images/svg/Filter';

import { useProducts } from '../../../../../../../context/ProductsContext';
import Button from '../../../../../../../components/Button';
import InputSelect from '../../../../../../../components/InputSelect';
import InputSlider from '../../../../../../../components/InputSlider';

const FilterModal = () => {
 const { openFilter, setOpenFilter } = useProducts();

 const { handleSubmit, control, reset } = useForm();

 const onSubmit = (data) => {
  console.log(data);
 };

 const categories = [{ name: 'Porta', code: 'Porta' }];
 const coupons = [{ name: 'ABC', code: 'ABC' }];
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
     <div className='w-96 h-2/3 bg-offWhite shadow-slate-700 drop-shadow-md p-6 rounded absolute top-44 z-20 overflow-y-auto'>
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
        onClick={reset}
       />
      </div>
      <div className='min-w-full min-h-[0.5px] my-3 bg-border' />
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
       <InputSelect label='Categoria' name='categorie' control={control} placeholder='Selecione' options={categories} optionLabel={'name'} />

       <InputSelect label='Cupom ativo' name='coupon' control={control} placeholder='Selecione' options={coupons} optionLabel={'name'} />

       <InputSelect label='Status' name='status' control={control} placeholder='Selecione' options={status} optionLabel={'name'} />

       <InputSlider label='Preço' name='price' control={control} />

       <InputSlider label='Estoque' name='stock' control={control} />

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
