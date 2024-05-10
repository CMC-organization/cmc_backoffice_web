import { Dropdown } from 'primereact/dropdown';
import { Controller } from 'react-hook-form';

const InputSelect = ({ label, name, control, placeholder, options, optionLabel }) => (
 <div className='flex flex-col gap-2'>
  <p className='text-sm font-medium text-black '>{label}</p>

  <Controller
   name={name}
   control={control}
   render={({ field }) => (
    <Dropdown
     id={field.name}
     value={field.value}
     onChange={(e) => field.onChange(e.value)}
     placeholder={placeholder}
     options={options}
     optionLabel={optionLabel}
     className='w-full md:w-14rem bg-offWhite'
    />
   )}
  />
 </div>
);

export default InputSelect;
