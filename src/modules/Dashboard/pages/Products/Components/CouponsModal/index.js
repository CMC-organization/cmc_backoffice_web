import { useForm } from 'react-hook-form';

import CouponsIcon from '../../../../../../images/svg/CouponsIcon';
import XClose from '../../../../../../images/svg/XClose';

import { useProducts } from '../../../../../../context/ProductsContext';
import Button from '../../../../../../components/Button';

const CouponsModal = () => {
 const { openCoupons, setOpenCoupons } = useProducts();

 const postFilter = () => {};

 const {
  handleSubmit,
  register,
  formState: { errors },
 } = useForm();

 return (
  <div className='flex flex-col gap-3'>
   <div
    className='border border-gray-200 rounded-md p-2.5 cursor-pointer z-20'
    onClick={() => {
     setOpenCoupons(!openCoupons);
    }}
   >
    <CouponsIcon />
   </div>
   {openCoupons && (
    <>
     <div
      className='fixed bg-modal w-screen h-screen top-0 left-0 z-20'
      onClick={() => {
       setOpenCoupons(false);
      }}
     />
     <div className='w-96 min-h-80 bg-offWhite rounded absolute top-44 z-20 px-6 py-6  drop-shadow-md shadow-slate-700'>
      <form onSubmit={handleSubmit(postFilter)}>
       <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
         <div
          className='cursor-pointer'
          onClick={() => {
           setOpenCoupons(false);
          }}
         >
          <XClose />
         </div>
         <p className='text-lg text-black font-medium'>Cupons</p>
        </div>
        <Button name='Salvar' width='w-132' height={'h-8'} textColor={'text-white'} backgroundColor='bg-primar' fontSize={'text-sm'} type='submit' />
       </div>
       <div className='min-w-full min-h-[0.5px] my-3 bg-border' />
      </form>
     </div>
    </>
   )}
  </div>
 );
};
export default CouponsModal;
