import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Slider } from 'primereact/slider';

const InputSlider = ({ label, name, control }) => {
 const [maxPrice, setMaxPrice] = useState(1000);
 const [minPrice, setMinPrice] = useState(0);

 const handlePrices = (value, field) => {
  const [proposedMin, proposedMax] = value;
  const minRange = 20;

  if (proposedMin > maxPrice - minRange) {
   field.onChange([maxPrice - minRange, maxPrice]);
   setMinPrice(maxPrice - minRange);
   setMaxPrice(maxPrice);
  } else if (proposedMax < minPrice + minRange) {
   field.onChange([minPrice, minPrice + minRange]);
   setMinPrice(minPrice);
   setMaxPrice(minPrice + minRange);
  } else {
   field.onChange(value);
   setMaxPrice(value[1]);
   setMinPrice(value[0]);
  }
 };

 return (
  <div className='flex flex-col gap-4'>
   <div className='flex flex-col gap-3'>
    <p className='text-sm font-medium text-black '>{label}</p>
    <div className='card flex justify-content-center'>
     <Controller
      name={name}
      control={control}
      render={({ field }) => (
       <Slider
        id={field.name}
        value={field.value}
        onChange={(e) => handlePrices(e.value, field)}
        className='w-14rem bg-gray-300'
        range
        min={0}
        max={1000}
       />
      )}
     />
    </div>
   </div>
   <div className='flex flex-row gap-4 justify-between'>
    <input type='text' disabled value={`R$ ${minPrice},00`} className='border-2 rounded-4 p-2 w-1/2 bg-white' />
    <input type='text' disabled value={`R$ ${maxPrice},00`} className='border-2 rounded-4 p-2 w-1/2 bg-white' />
   </div>
  </div>
 );
};

export default InputSlider;
