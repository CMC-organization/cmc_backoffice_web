import ApprovedIcon from '../../../../../../../images/svg/ApprovedIcon';
import XClose from '../../../../../../../images/svg/XClose';
import { useClients } from '../../../../../../../context/ClientsContext';

import SearchIcon from '../../../../../../../images/svg/SearchIcon';

const ApprovedModal = () => {
 const { openApproved, setOpenApproved } = useClients();

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
     <div className='w-[585px] min-h-[560px] bg-offWhite rounded-3xl z-20 drop-shadow-md shadow-slate-700'>
      
      <div className='flex items-center justify-between p-6'>
        <p className='text-lg text-black font-medium'>Aprovações de cadastro</p>
        <div
          className='cursor-pointer'
          onClick={() => {
            setOpenApproved(false);
          }}
         >
          <XClose />
         </div>
      </div>
      
      <div>
        <div className='p-6 border-t border-border'>
          <div className='flex items-center gap-2 border border-gray-200 rounded-3xl p-2.5 w-full'>
            <SearchIcon />
            <input placeholder='Pesquisar' className='text-gray-900 text-sm w-full outline-none' />
          </div>
        </div>

        <div className='p-6 border-b border-border flex justify-between'>
            <div>
              <p className='font-medium text-lg'>GOPN ARTIFICIAL INTELLIGENCE LTDA</p>
              <p className='text-font text-sm'>CNPJ: 54.218.535/0001-62</p>
            </div>
            <div className='flex items-center gap-4'>
              <button className='bg-primar text-white rounded-3xl text-sm px-2 py-1 font-medium'>Confirmar</button>
              <button className='border border-border rounded-3xl text-sm px-2 py-1 font-medium'>Recusar</button>
            </div>
        </div>
      </div>
     </div>
    </div>
   )}
  </div>
 );
};

export default ApprovedModal;
