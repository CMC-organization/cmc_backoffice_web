import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { Slider } from 'primereact/slider';

import Filter from '../../../../../../../images/svg/Filter';

import { useProducts } from '../../../../../../../context/ProductsContext';
import Button from '../../../../../../../components/Button';
import InputSelect from '../../../../../../../components/InputSelect';

const FilterModal = () => {
 const { openFilter, setOpenFilter, value, setValue, maxPrice, setMaxPrice, minPrice, setMinPrice } = useProducts();

 const { handleSubmit, control, reset } = useForm();

 const onSubmit = (data) => {
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

       <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-3'>
         <p className='text-sm font-medium text-black '>Estoque</p>
         <div className='card flex justify-content-center'>
          <Slider value={value} onChange={(e) => handlePrices(e.value)} className='w-14rem bg-gray-300' range />
         </div>
        </div>
        <div className='flex flex-row gap-4 justify-between'>
         <input type='text' disabled value={`R$ ${minPrice},00`} className='border-2 rounded-4 p-2 w-1/2 bg-white' />
         <input type='text' disabled value={`R$ ${maxPrice},00`} className='border-2 rounded-4 p-2 w-1/2 bg-white' />
        </div>
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
