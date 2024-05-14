import { InputSwitch } from 'primereact/inputswitch';
import { useState } from 'react';
import { useClients } from '../../../../../../context/ClientsContext';

import TreePoints from '../../../../../../images/svg/TreePoints';

const ClientCard = () => {
 const { setOpenActions } = useClients();
 const [status, setStatus] = useState();

 return (
  <div className='flex w-full border border-gray-200 rounded-md py-2 px-3'>
   <div className='flex items-center gap-4'>
     <img alt='avatar do cliente' className='w-12 h-10 object-fill rounded-xl' src='https://http2.mlstatic.com/D_NQ_NP_977561-MLB69393138658_052023-O.webp' />
    <div>
     <p className='text-base font-semibold text-black'>GOPN ARTIFICIAL INTELLIGENCE LTDA</p>

     <p className='text-xs font-medium text-font max-w-80 text-ellipsis overflow-hidden text-card-prodct'>
        CNPJ: 54.218.535/0001-62
     </p>
    </div>
   </div>
   <div className='min-w-[0.5px] min-h-100 bg-border mx-8' />
   <div className='w-full flex items-center justify-between'>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>Financeiro@gopn.ai</p>
     <p className='text-xs font-medium text-font'>E-mail do financeiro</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-primar bg-red4 px-4 py-1 rounded-full'>R$36,850.00</p>
     <p className='text-xs font-medium text-font'>Créditos</p>
    </div>
    <div className='flex flex-col items-center gap-1 w-fit'>
     <p className='text-xs font-medium text-primar bg-red4 px-4 py-1 rounded-full'>R$35,000.00</p>
     <p className='text-xs font-medium text-font'>Valor em aberto</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-primar bg-red4 px-4 py-1 rounded-full'>R$1,850.00</p>
     <p className='text-xs font-medium text-font'>Valor disponível</p>
    </div>


    <div className='flex flex-col items-center gap-1'>
     <InputSwitch checked={status} onChange={(e) => setStatus(e.value)} />
     <p className='whitespace-nowrap text-xs font-medium text-font'>Status</p>
    </div>


    <div
    className='bg-white rounded-md p-2.5 cursor-pointer'
    onClick={() => {
        setOpenActions(true);
    }}
   >
    <TreePoints />
   </div>
   </div>
   
  </div>
 );
};
export default ClientCard;
