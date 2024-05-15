import { InputSwitch } from 'primereact/inputswitch';
import { useState } from 'react';

import TreePoints from '../../../../../../images/svg/TreePoints';

const RawMaterialCard = () => {
 const [status, setStatus] = useState();

 return (
  <div className='flex w-full border border-gray-200 rounded-md py-2 px-3'>
   <div className='flex items-center gap-4'>
     <img alt='avatar do cliente' className='w-12 h-10 object-fill rounded-xl' src='https://http2.mlstatic.com/D_NQ_NP_977561-MLB69393138658_052023-O.webp' />
    <div>
     <p className='text-sm font-semibold text-black'>Aço</p>

     <p className='text-xs font-medium text-font max-w-80 text-ellipsis overflow-hidden text-card-prodct'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
     </p>
    </div>
   </div>
   <div className='min-w-[0.5px] min-h-100 bg-border mx-8' />
   <div className='w-full flex items-center justify-between'>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>GOPN ARTIFICIAL INTELLIGENCE LTDA</p>
     <p className='text-xs font-medium text-font'>CNPJ: 54.218.535/0001-62</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>T8GS6</p>
     <p className='text-xs font-medium text-font'>SKU</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>R$ 1.000,00</p>
     <p className='text-xs font-medium text-font'>Custo</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>1.900</p>
     <p className='text-xs font-medium text-font'>Estoque</p>
    </div>


    <div className='flex flex-col items-center gap-1'>
     <InputSwitch checked={status} onChange={(e) => setStatus(e.value)} />
     <p className='whitespace-nowrap text-xs font-medium text-font'>Status</p>
    </div>


    <div
    className='bg-white rounded-md p-2.5 cursor-pointer'
    onClick={() => {}}
   >
    <TreePoints />
   </div>
   </div>
   
  </div>
 );
};

export default RawMaterialCard;
