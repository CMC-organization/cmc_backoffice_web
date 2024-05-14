import { Controller } from 'react-hook-form';
import { MultiSelect } from 'primereact/multiselect';

const InputMultSelect = ({ label, name, control, placeholder, options, optionLabel }) => (
 <div className='w-full flex flex-col gap-2'>
  <p className='text-sm font-medium text-black '>{label}</p>
  <div className='flex items-center border-1 border-border rounded-xl h-12 py-2 px-1'>
   <Controller
    name={name}
    control={control}
    render={({ field }) => (
     <MultiSelect
      id={field.name}
      value={field.value}
      onChange={(e) => field.onChange(e.value)}
      placeholder={placeholder}
      options={options}
      optionLabel={optionLabel}
      display='chip'
      maxSelectedLabels={3}
      className='w-full md:w-20rem'
     />
    )}
   />
  </div>
 </div>
);

export default InputMultSelect;
