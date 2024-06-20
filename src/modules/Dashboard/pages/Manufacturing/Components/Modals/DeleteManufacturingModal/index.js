import Button from '../../../../../../../components/Button';
import { useManufacturing } from '../../../../../../../context/Manufacturing';
import XClose from '../../../../../../../images/svg/XClose';

const DeleteManufacturingModal = () => {
 const { setOpenDelete } = useManufacturing();

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
   setOpenDelete(false);
  }
 };

 return (
  <div className='w-screen h-screen flex items-center justify-center fixed bg-modal  top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
   <div className='w-[375px] min-h-72 bg-offWhite rounded-3xl z-20 drop-shadow-md shadow-slate-700'>
    <div className='flex items-center justify-between p-6'>
     <div className='flex items-center gap-3'>
      <div
       className='cursor-pointer'
       onClick={() => {
        setOpenDelete(false);
       }}
      >
       <XClose />
      </div>
      <p className='text-lg text-black font-medium'>Excluir fabricação</p>
     </div>
     <Button name='Excluir' width='w-132' height={'h-10'} textColor={'text-primar'} backgroundColor='bg-red4' fontSize={'text-sm'} type='submit' />
    </div>
    <div className='py-5 px-3 border-t border-border text-center'>
     <p className='text-lg'>
      Tem certeza que deseja excluir a fabricação <span className='font-semibold'>ação Irreversível</span>?
     </p>
    </div>
   </div>
  </div>
 );
};

export default DeleteManufacturingModal;
