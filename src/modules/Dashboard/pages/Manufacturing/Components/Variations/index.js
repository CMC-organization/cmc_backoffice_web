import Door from '../../../../../../images/svg/Door';
import Rule from '../../../../../../images/svg/Rule';
import XButton from '../../../../../../images/svg/XButton';

const Variations = () => {
 return (
  <div className='flex gap-4'>
   <div className='relative'>
    <div className='w-20 h-20 border border-gray-200 rounded-md p-0.5 cursor-pointer flex items-center justify-center'>
     <img className='max-w-full max-h-full object-cover' src='https://http2.mlstatic.com/D_NQ_NP_977561-MLB69393138658_052023-O.webp' />
    </div>
    <div className='absolute -top-3 -right-3'>
     <XButton />
    </div>
   </div>
   <div className='flex flex-col gap-3'>
    <div className='flex flex-col gap-1'>
     <p className='text-sm font-medium text-black'>Porta Lambril Preta</p>
     <p className='text-xs font-medium text-font'>Portas</p>
    </div>
    <div className='max-h-32 flex flex-col gap-2 overflow-y-auto'>
     <div className='flex flex-col gap-1'>
      <p className='text-xs font-medium text-black'>Lado de abertura</p>
      <div className='flex items-center gap-2 overflow-y-auto'>
       <div className='w-max px-3 py-1 rounded-3xl flex items-center justify-center gap-1 bg-primar cursor-pointer'>
        <Door />
        <p className='text-xs font-medium text-offWhite'>Direito</p>
       </div>
       <div className='w-max px-3 py-1 rounded-3xl flex items-center justify-center gap-1 bg-red4 cursor-pointer'>
        <Door color='#C40024' />
        <p className='text-xs font-medium text-primar'>Esquerdo</p>
       </div>
      </div>
     </div>
     <div className='flex flex-col gap-1'>
      <p className='text-xs font-medium text-black'>Tamanho</p>
      <div className='flex items-center gap-2 overflow-y-auto'>
       <div className='w-max px-3 py-1 rounded-3xl flex items-center justify-center gap-1 bg-primar'>
        <Rule />
        <p className='text-xs font-medium text-offWhite'>2,10 X 0,90</p>
       </div>
       <div className='w-max px-3 py-1 rounded-3xl flex items-center justify-center gap-1 bg-red4 cursor-pointer'>
        <Rule color='#C40024' />
        <p className='text-xs font-medium text-primar'>2,10 X 0,90</p>
       </div>
       <div className='w-max px-3 py-1 rounded-3xl flex items-center justify-center gap-1 bg-red4 cursor-pointer'>
        <Rule color='#C40024' />
        <p className='text-xs font-medium text-primar'>2,10 X 0,90</p>
       </div>
      </div>
     </div>
    </div>
    <div>
     <p className='text-base font-medium text-black'>Quantidade a fabricar</p>
     <p className='text-base font-medium text-black'>10.000</p>
    </div>
   </div>
  </div>
 );
};
export default Variations;
