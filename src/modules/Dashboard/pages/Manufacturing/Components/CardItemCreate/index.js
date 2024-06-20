import Check from '../../../../../../images/svg/checboxChecked';

const CardItemCreate = () => {
 return (
  <div className='flex justify-between items-center cursor-pointer border border-gray-200 rounded-3xl p-3'>
   <div className='w-44 flex gap-2 items-center'>
    <div className='w-14 h-14 border border-gray-200 rounded-md p-0.5 cursor-pointer flex items-center justify-center'>
     <img className='max-w-full max-h-full object-cover' src='https://http2.mlstatic.com/D_NQ_NP_977561-MLB69393138658_052023-O.webp' />
    </div>
    <p className='text-sm font-medium text-black'>Porta Lambril Preta</p>
   </div>
   <div className='flex items-center gap-3'>
    <div className='flex flex-col items-center'>
     <p className='text-sm font-medium'>1</p>
     <p className='text-xs font-medium text-font'>N° variações</p>
    </div>
    <div className='flex flex-col items-center'>
     <p className='text-sm font-medium'>1.000</p>
     <p className='text-xs font-medium text-font'>QTD à fabricar</p>
    </div>
   </div>
   <Check color='#C40024' />
  </div>
 );
};
export default CardItemCreate;
