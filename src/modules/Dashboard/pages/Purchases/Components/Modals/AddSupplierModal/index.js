import { useForm } from 'react-hook-form';

import AddIcon from '../../../../../../../images/svg/AddIcon';
import XClose from '../../../../../../../images/svg/XClose';

import Button from '../../../../../../../components/Button';
import { usePurchases } from '../../../../../../../context/PurchasesContext';

const AddSupplierModal = () => {
 const { openAddSupplier, setOpenAddSupplier } = usePurchases();

 const postFilter = () => {};

 const {
  handleSubmit,
  register,
  formState: { errors },
 } = useForm();

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
   setOpenAddSupplier(false);
  }
 };

 return (
  <div className='flex flex-col gap-3'>
   <div
    className='border border-gray-200 rounded-md p-2.5 cursor-pointer'
    onClick={() => {
     setOpenAddSupplier(!openAddSupplier);
    }}
   >
    <AddIcon />
   </div>
   {openAddSupplier && (
    <div className='w-screen h-screen flex items-center justify-center fixed bg-modal  top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
     <div className='w-96 min-h-80 bg-offWhite rounded  z-20 px-6 py-6  drop-shadow-md shadow-slate-700'>
      <form onSubmit={handleSubmit(postFilter)}>
       <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
         <div
          className='cursor-pointer'
          onClick={() => {
           setOpenAddSupplier(false);
          }}
         >
          <XClose />
         </div>
         <p className='text-lg text-black font-medium'>Adicionar fornecedor</p>
        </div>
        <Button name='Salvar' width='w-132' height={'h-8'} textColor={'text-white'} backgroundColor='bg-primar' fontSize={'text-sm'} type='submit' />
       </div>
       <div className='min-w-full min-h-[0.5px] my-3 bg-border' />
      </form>
     </div>
    </div>
   )}
  </div>
 );
};
export default AddSupplierModal;
