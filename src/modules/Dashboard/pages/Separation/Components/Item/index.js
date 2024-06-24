import Door from '../../../../../../images/svg/Door';
import Rule from '../../../../../../images/svg/Rule';
import List from '../../../../../../images/svg/List';
import CheckGreen from '../../../../../../images/svg/CheckGreen';
import Factory from '../../../../../../images/svg/Factory';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Item = () => {
 return (
  <div className='flex gap-4'>
   <div className='w-20 h-20 border border-gray-200 rounded-md p-0.5 cursor-pointer flex items-center justify-center'>
    <img className='max-w-full max-h-full object-cover' src='https://http2.mlstatic.com/D_NQ_NP_977561-MLB69393138658_052023-O.webp' />
   </div>
   <div className='flex flex-col gap-3'>
    <div className='flex flex-col gap-1'>
     <p className='text-sm font-medium text-black'>Porta Lambril Preta</p>
     <p className='text-xs font-medium text-font'>Portas</p>
    </div>
    <div className='flex'>
     <div className='min-w-24 flex flex-col gap-1'>
      <p className='text-xs font-medium text-black'>Lado de abertura</p>
      <div className='w-max px-3 py-1 rounded-3xl flex items-center justify-center gap-1 bg-primar'>
       <Door />
       <p className='text-xs font-medium text-offWhite'>Direito</p>
      </div>
     </div>
     <div className='w-[0.5px] h-100 bg-border mr-2 ml-2' />
     <div className='min-w-24 flex flex-col gap-1'>
      <p className='text-xs font-medium text-black'>Tamanho</p>
      <div className='w-max px-3 py-1 rounded-3xl flex items-center justify-center gap-1 bg-primar'>
       <Rule />
       <p className='text-xs font-medium text-offWhite'>2,10 X 0,90</p>
      </div>
     </div>
     <div className='w-[0.5px] h-100 bg-border mr-2 ml-2' />
     <div className='min-w-24 flex flex-col gap-1'>
      <p className='text-xs font-medium text-black'>QTD Pedido</p>
      <div className='w-max px-3 py-1 rounded-3xl flex items-center justify-center gap-1 bg-primar'>
       <List />
       <p className='text-xs font-medium text-offWhite'>10</p>
      </div>
     </div>
     <div className='w-[0.5px] h-100 bg-border mr-2 ml-2' />
     <div className='min-w-24 flex flex-col gap-1'>
      <p className='text-xs font-medium text-black'>QTD Pronta entrega</p>
      <div className='w-max px-3 py-1 rounded-3xl flex items-center justify-center gap-1 bg-green-200'>
       <CheckGreen />
       <p className='text-xs font-medium text-green-500'>5</p>
      </div>
     </div>
     <div className='w-[0.5px] h-100 bg-border mr-2 ml-2' />
     <div className='min-w-24 flex flex-col gap-1'>
      <p className='text-xs font-medium text-black'>QTD Para fabricar</p>
      <div className='w-max px-3 py-1 rounded-3xl flex items-center justify-center gap-1 bg-lime-100'>
       <Factory />
       <p className='text-xs font-medium text-lime-600'>5</p>
      </div>
     </div>
     <div className='w-10 ml-3'>
      <CircularProgressbar
       value={80}
       text={`${80}%`}
       styles={buildStyles({
        pathColor: '#C40024',
        textColor: '#C40024',
        trailColor: '#FFBDC7',
        rotation: 0.5,
       })}
      />
     </div>
    </div>
   </div>
  </div>
 );
};
export default Item;
