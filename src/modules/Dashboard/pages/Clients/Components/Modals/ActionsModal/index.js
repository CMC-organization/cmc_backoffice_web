import { useClients } from '../../../../../../../context/ClientsContext';
import TreePoints from '../../../../../../../images/svg/TreePoints';
import XClose from '../../../../../../../images/svg/XClose';
import DeleteAccessModal from '../DeleteAccessModal';
import EditClientModal from '../EditClientModal';

const ActionsModal = () => {
 const { openActions, setOpenActions } = useClients();

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
    setOpenActions(false);
  }
 };

 return (
  <div className='flex flex-col gap-3'>
   <div
    className='bg-white rounded-md p-2.5 cursor-pointer'
    onClick={() => {
        setOpenActions(true);
    }}
   >
    <TreePoints />
   </div>
   {openActions && (
    <div className='w-screen h-screen flex items-center justify-center fixed bg-modal top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
     <div className='w-[585px] min-h-80 bg-offWhite rounded-3xl z-20 px-6 py-6  drop-shadow-md shadow-slate-700'>
       <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>

         <p className='text-lg text-black font-medium'>Ações</p>
        </div>
        <div
          className='cursor-pointer'
          onClick={() => {
            setOpenActions(false);
          }}
         >
          <XClose />
         </div>
        </div>
       <div className='min-w-full min-h-[0.5px] my-3 bg-border' />
       <div>
          <DeleteAccessModal />
          <EditClientModal />
       </div>
     </div>
    </div>
   )}
  </div>
 );
};

export default ActionsModal;
