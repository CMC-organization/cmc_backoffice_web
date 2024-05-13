import { useForm } from 'react-hook-form';

import ApprovedIcon from '../../../../../../../images/svg/ApprovedIcon';
import XClose from '../../../../../../../images/svg/XClose';

import Button from '../../../../../../../components/Button';
import { useClients } from '../../../../../../../context/ClientsContext';

const ApprovedModal = () => {
 const { openApproved, setOpenApproved } = useClients();

 const postFilter = () => {};

 const {
  handleSubmit,
  register,
  formState: { errors },
 } = useForm();

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
    setOpenApproved(false);
  }
 };

 return (
  <div className='flex flex-col gap-3'>
   <div
    className='border border-gray-200 bg-white rounded-md p-2.5 cursor-pointer'
    onClick={() => {
        setOpenApproved(true);
    }}
   >
    <ApprovedIcon />
   </div>
   {openApproved && (
    <div className='w-screen h-screen flex items-center justify-center fixed bg-modal  top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
     <div className='w-96 min-h-80 bg-offWhite rounded  z-20 px-6 py-6  drop-shadow-md shadow-slate-700'>
      <form onSubmit={handleSubmit(postFilter)}>
       <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>

         <p className='text-lg text-black font-medium'>Aprovações de cadastro</p>
        </div>
        <div
          className='cursor-pointer'
          onClick={() => {
            setOpenApproved(false);
          }}
         >
          <XClose />
         </div>
        </div>
       <div className='min-w-full min-h-[0.5px] my-3 bg-border' />
      </form>
     </div>
    </div>
   )}
  </div>
 );
};
export default ApprovedModal;
