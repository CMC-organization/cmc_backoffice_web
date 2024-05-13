import { useForm } from 'react-hook-form';

import XClose from '../../../../../../../images/svg/XClose';

import { useAccess } from '../../../../../../../context/AccessContext';

const EditDeleteModal = () => {
 const { setOpenEditDelete, setOpenDelete } = useAccess();

 const postFilter = () => {};

 const {
  handleSubmit,
  register,
  formState: { errors },
 } = useForm();

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
   setOpenEditDelete(false);
  }
 };

 return (
  <>
   <div className='w-screen h-screen flex items-center justify-center fixed bg-modal  top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
    <div className='w-96 min-h-80 bg-offWhite rounded  z-20 px-6 py-6  drop-shadow-md shadow-slate-700'>
     <form onSubmit={handleSubmit(postFilter)}>
      <div className='flex items-center justify-between'>
       <div className='flex items-center gap-3'>
        <p className='text-lg text-black font-medium'>Ações</p>
       </div>
       <div
        className='cursor-pointer'
        onClick={() => {
         setOpenEditDelete(false);
        }}
       >
        <XClose />
       </div>
      </div>
      <div className='min-w-full min-h-[0.5px] my-3 bg-border' />
      <div>
       <div className='w-full flex justify-center cursor-pointer'>
        <p className='text-lg text-black font-medium'>Editar produto</p>
       </div>
       <div className='min-w-full min-h-[0.5px] my-3 bg-border' />
       <div
        className='w-full flex justify-center cursor-pointer'
        onClick={() => {
         setOpenEditDelete(false);
         setOpenDelete(true);
        }}
       >
        <p className='text-lg text-primar font-medium'>Excluir produto</p>
       </div>
      </div>
     </form>
    </div>
   </div>
  </>
 );
};
export default EditDeleteModal;
