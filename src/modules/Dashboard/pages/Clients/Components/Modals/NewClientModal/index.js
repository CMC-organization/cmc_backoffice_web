import { useClients } from '../../../../../../../context/ClientsContext';
import XClose from '../../../../../../../images/svg/XClose';
import Button from '../../../../../../../components/Button';

const NewClientModal = () => {
 const { openNewClient, setOpenNewClient } = useClients();

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
    setOpenNewClient(false);
  }
 };

 return (
  <div className='flex flex-col gap-3'>
       <Button
        name='Cadastrar cliente'
        width='w-[190px]'
        height={'h-12'}
        textColor={'text-white'}
        backgroundColor='bg-primar'
        onClick={() => {
            setOpenNewClient(true);
        }}
       />
   {openNewClient && (
    <div className='w-screen h-screen flex items-center justify-center fixed bg-modal top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
     <div className='w-[585px] min-h-80 bg-offWhite rounded-3xl z-20 px-6 py-6  drop-shadow-md shadow-slate-700'>
       <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>

         <p className='text-lg text-black font-medium'>Novo cliente</p>
        </div>
        <div
          className='cursor-pointer'
          onClick={() => {
            setOpenNewClient(false);
          }}
         >
          <XClose />
         </div>
        </div>
       <div className='min-w-full min-h-[0.5px] my-3 bg-border' />
     </div>
    </div>
   )}
  </div>
 );
};

export default NewClientModal;
