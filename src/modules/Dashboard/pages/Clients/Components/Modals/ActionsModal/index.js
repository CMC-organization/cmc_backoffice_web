import { useClients } from '../../../../../../../context/ClientsContext';
import XClose from '../../../../../../../images/svg/XClose';

const ActionsModal = () => {
 const { setOpenDelete, setOpenActions, setOpenEdit } = useClients();

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
    setOpenActions(false);
  }
 };

 return (
    <div className='w-screen h-screen flex items-center justify-center fixed bg-modal top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
     <div className='w-[375px] min-h-80 bg-offWhite rounded-3xl z-20 drop-shadow-md shadow-slate-700'>
      <div className='flex items-center justify-between p-6'>
        <p className='text-lg text-black font-medium'>Ações</p>
        <div
          className='cursor-pointer'
          onClick={() => {
            setOpenActions(false);
          }}
         >
          <XClose />
        </div>
      </div> 

      <div
        className='border-t border-gray-200 p-6 cursor-pointer font-medium text-lg text-center'
        onClick={() => {
          setOpenEdit(true);
          setOpenActions(false);
        }}
      >
        Editar Cliente
      </div>

      <div
        className='border border-gray-200 p-6 cursor-pointer font-medium text-lg text-center text-red5'
        onClick={() => {
          setOpenDelete(true);
          setOpenActions(false);
        }}
      >
        Excluir acesso cliente 
      </div>


     </div>
    </div>
   )
};

export default ActionsModal;
