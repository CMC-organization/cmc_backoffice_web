import { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';

import TreePoints from '../../../../../../images/svg/TreePoints';

import { useProducts } from '../../../../../../context/ProductsContext';

const ProductCard = () => {
 const { setOpenEditDelete } = useProducts();

 const [status, setStatus] = useState();

 return (
  <div className='flex w-full border border-gray-200 rounded-md py-2 px-3'>
   <div className='flex items-center gap-4'>
    <div className='w-20 h-20 border border-gray-200 rounded-md p-0.5 cursor-pointer flex items-center justify-center'>
     <img className='max-w-full max-h-full object-cover' src='https://http2.mlstatic.com/D_NQ_NP_977561-MLB69393138658_052023-O.webp' />
    </div>
    <div>
     <p className='text-base font-semibold text-black'>Porta Lambril Preta</p>

     <p className='text-xs font-medium text-font max-w-80 text-ellipsis overflow-hidden text-card-prodct'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et djkhasgdkjyag lkasuhdgaustfdkjashd
      khgasfdljashfdkhtagsgdkjgf Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et djkhasgdkjyag
      lkasuhdgaustfdkjashd khgasfdljashfdkhtagsgdkjgf
     </p>
    </div>
   </div>
   <div className='min-w-[0.5px] min-h-100 bg-border mx-8' />
   <div className='w-full flex items-center justify-between'>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>Portas</p>
     <p className='text-xs font-medium text-font'>Categoria</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>T8GS6</p>
     <p className='text-xs font-medium text-font'>SKU</p>
    </div>
    <div className='flex flex-col items-center gap-1 w-fit'>
     <p className='text-xs font-medium text-primar'>Ativado</p>
     <p className='text-xs font-medium text-font'>Cupom</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>R$ 1.000,00</p>
     <p className='text-xs font-medium text-font'>Preço</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>2.800</p>
     <p className='text-xs font-medium text-font'>Estoque</p>
    </div>

    <div className='flex flex-col items-center gap-1'>
     <InputSwitch checked={status} onChange={(e) => setStatus(e.value)} />
     <p className='whitespace-nowrap text-xs font-medium text-font'>Status</p>
    </div>

    <div
     onClick={() => {
      setOpenEditDelete(true);
     }}
     className='cursor-pointer'
    >
     <TreePoints />
    </div>
   </div>
  </div>
 );
};
export default ProductCard;
