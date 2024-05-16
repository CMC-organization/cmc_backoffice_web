import { useForm } from 'react-hook-form';

import XClose from '../../../../../../../images/svg/XClose';

import { useOrders } from '../../../../../../../context/OrdersContext';
import Button from '../../../../../../../components/Button';
import InputSelect from '../../../../../../../components/InputSelect';
import InputCalendar from '../../../../../../../components/InputCalendar';

const ExportDataModal = () => {
 const { setOpenExport } = useOrders();

 const { handleSubmit, control } = useForm({
    defaultValues: {
        client: '',
        exports: '',
        files: '',
        date: '',
    },
 });

 const onSubmit = (data) => {
  console.log(data);
 };

 const clients = [
  { name: 'Joao', code: 'Joao' },
  { name: 'Gustavo', code: 'Gustavo' },
 ];
 const exports = [
  { name: 'Teste', code: 'Teste' },
  { name: 'Dois', code: 'Gustavo' },
 ];
 const files = [
  { name: 'Pasta', code: 'Pasta' },
  { name: 'Dado', code: 'Dado' },
 ];

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
   setOpenExport(false);
  }
 };

 return (
  <>
   <div className='w-screen h-screen flex items-center justify-center fixed bg-modal  top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
    <div className='w-96 min-h-80 mx-0 bg-offWhite rounded z-30 px-6 py-6  drop-shadow-md shadow-slate-700'>
     <form onSubmit={handleSubmit(onSubmit)}>
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
       <InputSelect label='Cliente' name='client' control={control} placeholder='Selecione' options={clients} optionLabel={'name'} />

       <InputSelect label='Setor de exportação' name='exports' control={control} placeholder='Selecione' options={exports} optionLabel={'name'} />

       <InputSelect label='Tipos de arquivo' name='files' control={control} placeholder='Selecione' options={files} optionLabel={'name'} />

       <InputCalendar label='Data' name='date' control={control} placeholder='DD/MM/AAAA' />
      </div>
     </form>
    </div>
   </div>
  </>
 );
};
export default ExportDataModal;
