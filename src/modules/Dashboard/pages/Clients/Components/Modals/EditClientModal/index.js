import { useClients } from '../../../../../../../context/ClientsContext';
import XClose from '../../../../../../../images/svg/XClose';

const EditClientModal = () => {
 const { setOpenEdit } = useClients();

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
    setOpenEdit(false);
  }
 };

 return (
    <div className='w-screen h-screen flex items-center justify-center fixed bg-modal  top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
     <div className='w-[585px] min-h-80 bg-offWhite rounded-3xl  z-20 px-6 py-6  drop-shadow-md shadow-slate-700'>
       <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>

         <p className='text-lg text-black font-medium'>Editar cliente</p>
        </div>
        <div
          className='cursor-pointer'
          onClick={() => {
            setOpenEdit(false);
          }}
         >
          <XClose />
         </div>
        </div>
       <div className='min-w-full min-h-[0.5px] my-3 bg-border' />
     </div>
    </div>
   )
};

export default EditClientModal;
