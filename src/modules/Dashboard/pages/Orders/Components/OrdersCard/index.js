import { useState } from 'react';

import ArrowUp from '../../../../../../images/svg/ArrowUp';
import Invoice from '../../../../../../images/svg/Invoice';
import Cipher from '../../../../../../images/svg/Cipher';

import ItemCard from '../ItemCard';
import CheckInfromation from '../CheckInfromation';

const OrdersCard = () => {
 const [open, setOpen] = useState(false);

 return (
  <div className=' w-max border border-gray-200 rounded-md p-2.5 flex flex-col'>
   <div className='flex items-center gap-4'>
    <div
     className='cursor-pointer'
     onClick={() => {
      setOpen(!open);
     }}
    >
     <ArrowUp />
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>#1015</p>
     <p className='text-xs font-medium text-font'>Pedido</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>04/12/2023</p>
     <p className='text-xs font-medium text-font'>Data do pedido</p>
    </div>
    <div className='flex flex-col items-center gap-1 w-fit'>
     <p className='text-sm font-medium text-black'>GOPN ARTIFICIAL INTELLIGENCE LTDA</p>
     <p className='text-xs font-medium text-font'>CNPJ: 54.218.535/0001-62</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>Rua coronel de castro n°43</p>
     <p className='text-xs font-medium text-font'>Endereço de entrega</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>09/12/2023</p>
     <p className='text-xs font-medium text-font'>Previsão de entrega</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>Yuri silva</p>
     <p className='text-xs font-medium text-font'>Cupom usado</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>32</p>
     <p className='text-xs font-medium text-font'>N° itens</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>100 KG</p>
     <p className='text-xs font-medium text-font'>Peso total</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>R$ 36.400,00</p>
     <p className='text-xs font-medium text-font'>Valor total</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-sm font-medium text-black'>2x no cheque</p>
     <p className='text-xs font-medium text-font'>Forma de pagamento</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='text-[10px] font-medium text-font2'>Em rota de entrega</p>
     <p className='text-xs font-medium text-font'>Status</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <Invoice />
     <p className='text-xs font-medium text-font'>Nota fiscal</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <Cipher />
     <p className='text-xs font-medium text-font'>Gerar cobrança</p>
    </div>
   </div>
   {open && (
    <div className='flex flex-col gap-4 mt-4'>
     <div className='flex flex-col gap-3'>
      <p className='text-base font-medium text-black'>Detalhes do pedido</p>
      <div className='flex'>
       <ItemCard />
       <div className='w-[0.5px] h-100 bg-border mr-10 ml-10' />
       <ItemCard />
       <div className='w-[0.5px] h-100 bg-border mr-10 ml-10' />
       <ItemCard />
      </div>
     </div>
     <div className='flex flex-col gap-3'>
      <p className='text-base font-medium text-black'>Informações sobre o cheque</p>
      <CheckInfromation />
     </div>
    </div>
   )}
  </div>
 );
};
export default OrdersCard;
