import { Calendar } from 'primereact/calendar';
import { Controller } from 'react-hook-form';

const InputCalendar = ({ label, name, control, placeholder }) => (
 <div className='flex flex-col gap-2'>
  <p className='text-sm font-medium text-black '>{label}</p>
  <div class='caledar_div'>
   <Controller
    name={name}
    control={control}
    render={({ field }) => (
     <Calendar
      id={field.name}
      value={field.value}
      onChange={(e) => field.onChange(e.value)}
      placeholder={placeholder}
      showIcon
      locale='pt'
      dateFormat='dd/mm/yy'
      className='w-full pl-1.5'
     />
    )}
   />
  </div>
 </div>
);

export default InputCalendar;
