import XClose from '../../../../../../../images/svg/XClose';

import { useAccess } from '../../../../../../../context/AccessContext';
import Button from '../../../../../../../components/Button';

const DeleteModal = () => {
 const { setOpenDelete } = useAccess();

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
   setOpenDelete(false);
  }
 };

 return (
  <div className='w-screen h-screen flex items-center justify-center fixed bg-modal  top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
   <div className='w-96 min-h-80 bg-offWhite rounded  z-20 px-6 py-6  drop-shadow-md shadow-slate-700'>
    <div className='flex items-center justify-between'>
     <div className='flex items-center gap-3'>
      <div
       className='cursor-pointer'
       onClick={() => {
        setOpenDelete(false);
       }}
      >
       <XClose />
      </div>
      <p className='text-lg text-black font-medium'>Excluir produto</p>
     </div>
     <Button name='Excluir' width='w-132' height={'h-8'} textColor={'text-primar'} backgroundColor='bg-red-100' fontSize={'text-sm'} type='submit' />
    </div>
    <div className='min-w-full min-h-[0.5px] my-3 bg-border' />
    <div className='w-full flex items-center justify-center cursor-pointer pt-11'>
     <p className='text-lg text-black font-regular text-center'>
      Tem certeza que deseja excluir o usuário <p className='text-lg text-black font-medium'>Mateus Barbosa ?</p>
     </p>
    </div>
   </div>
  </div>
 );
};
export default DeleteModal;
