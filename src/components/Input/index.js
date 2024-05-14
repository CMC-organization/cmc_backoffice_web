import React from 'react';
import InputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';

const Input = ({ label, name, control, rules, placeholder, error, mask, disabled, height }) => (
 <div className='flex flex-col items-start w-full'>
  <label className='text-sm mb-2 font-medium text-black'>{label}</label>
  {mask ? (
   <Controller
    name={name}
    control={control}
    rules={{ rules }}
    render={({ field }) => (
     <InputMask
      id={field.name}
      {...field}
      autoFocus
      mask={mask}
      placeholder={placeholder}
      disabled={disabled}
      autoComplete='off'
      className={`
            text-sm mb-2 font-medium w-full pl-3 rounded-2xl border-1 bg-offWhite
            ${height ? height : 'h-12'}
            ${error ? 'border-red1' : 'border-border'}
            `}
     />
    )}
   />
  ) : (
   <Controller
    name={name}
    control={control}
    rules={{ rules }}
    render={({ field }) => (
     <input
      id={field.name}
      {...field}
      autoFocus
      placeholder={placeholder}
      disabled={disabled}
      autoComplete='off'
      className={`
        text-sm mb-2 font-medium w-full pl-3 rounded-xl border-1 bg-offWhite
        ${height ? height : 'h-12'}
        ${error ? 'border-red1' : 'border-border'}
        `}
     />
    )}
   />
  )}
  <span className='min-h-5 mt-2 text-sm font-semiboldc text-red1'>{error?.message}</span>
 </div>
);

export default Input;
