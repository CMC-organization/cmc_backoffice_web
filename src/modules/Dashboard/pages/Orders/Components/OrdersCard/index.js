import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ArrowUp from '../../../../../../images/svg/ArrowUp';
import ArrowDown from '../../../../../../images/svg/ArrowDown';
import Invoice from '../../../../../../images/svg/Invoice';
import Upload from '../../../../../../images/svg/Upload';

import ItemCard from '../ItemCard';
import CheckInfromation from '../CheckInfromation';
import UploadCard from '../UploadCard';
import Button from '../../../../../../components/Button';

const OrdersCard = ({ setListItens }) => {
 const [open, setOpen] = useState(false);
 const [idOne, setIdOne] = useState('');
 const [idTwo, setIdTwo] = useState('');

 useEffect(() => {
  const idDiv1 = uuidv4();
  const idDiv2 = uuidv4();

  setIdOne(idDiv1);
  setIdTwo(idDiv2);

  setListItens((prevList) => [...prevList, idDiv1, idDiv2]);
 }, []);

 return (
  <div className='w-full border border-gray-200 rounded-md p-4 flex flex-col'>
   <div className='flex items-center gap-4 overflow-x-hidden' id={idOne}>
    {open ? (
     <div
      className='cursor-pointer'
      onClick={() => {
       setOpen(!open);
      }}
     >
      <ArrowUp />
     </div>
    ) : (
     <div
      className='cursor-pointer'
      onClick={() => {
       setOpen(!open);
      }}
     >
      <ArrowDown />
     </div>
    )}
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>#1015</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>Pedido</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>04/12/2023</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>Data do pedido</p>
    </div>
    <div className='flex flex-col items-center gap-1 w-fit'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>GOPN ARTIFICIAL INTELLIGENCE LTDA</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>CNPJ: 54.218.535/0001-62</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>Rua coronel de castro n°43</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>Endereço de entrega</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-xs font-medium text-primar'>Região 1</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>Região de entrega</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>09/12/2023</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>Previsão de entrega</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>Yuri silva</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>Cupom usado</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>32</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>N° itens</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>100 KG</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>Peso total</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>R$ 36.400,00</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>Valor total</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-sm font-medium text-black'>2x no cheque</p>
     <p className=' whitespace-nowrap text-xs font-medium text-font'>Forma de pagamento</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className=' whitespace-nowrap text-[10px] font-medium text-font2'>Em rota de entrega</p>
     <p className='whitespace-nowrap text-xs font-medium text-font'>Status</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <Invoice />
     <p className='whitespace-nowrap text-xs font-medium text-font'>Nota fiscal</p>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <Button
      name='Cancelar pedido'
      width={'w-48'}
      height={'h-10'}
      textColor={'text-white'}
      backgroundColor={'bg-primar'}
      border={'border-border border-1 '}
      onClick={() => {}}
     />
    </div>
   </div>
   {open && (
    <div className='w-full overflow-x-hidden' id={idTwo}>
     <div className='w-full h-[0.5px] bg-border mt-6 mb-6' />
     <div className='flex flex-col'>
      <div className='flex flex-col gap-3'>
       <p className='text-base font-medium text-black'>Detalhes do pedido</p>
       <div className='flex'>
        <ItemCard />
        <div className='min-w-[0.5px] min-h-100 bg-border mr-10 ml-10' />
        <ItemCard />
        <div className='min-w-[0.5px] min-h-100 bg-border mr-10 ml-10' />
        <ItemCard />
       </div>
      </div>
      <div className='w-full min-h-[0.5px] bg-border mt-6 mb-6' />
      <div className='flex flex-col gap-3'>
       <p className='text-base font-medium text-black'>Informações sobre o cheque</p>
       <div className='flex items-center gap-10'>
        <CheckInfromation />
        <CheckInfromation />
       </div>
      </div>
      <div className='min-w-full min-h-[0.5px] bg-border mt-6 mb-6' />
      <div className='flex flex-col gap-3'>
       <div className='flex items-center gap-2'>
        <p className='text-base font-medium text-black'>Anexos</p>
        <Upload />
       </div>
       <UploadCard />
      </div>
     </div>
    </div>
   )}
  </div>
 );
};
export default OrdersCard;
