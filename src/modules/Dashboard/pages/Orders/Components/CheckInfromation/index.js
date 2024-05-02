const CheckInfromation = () => {
 return (
  <div className='flex items-center gap-5'>
   <div className='flex flex-col items-center gap-1'>
    <p className='text-sm font-medium text-black'>34434343 0000000000 808080808080</p>
    <p className='text-xs font-medium text-font'>N° do cheque</p>
   </div>
   <div className='flex flex-col items-center gap-1'>
    <img className='w-14 h-9 object-cover rounded-md' src='https://www.mediamarketing.com.br/cdn/shop/products/Checao.jpg?v=1712952614&width=1445' />
    <p className='text-xs font-medium text-font'>Foto do cheque</p>
   </div>
   <div className='flex flex-col items-center gap-1'>
    <p className='text-[10px] font-medium text-green1'>Repassado com sucesso</p>
    <p className='text-xs font-medium text-font'>Status do cheque</p>
   </div>
   <div className='flex flex-col items-center gap-1'>
    <p className='text-[10px] font-medium text-font2'>Gopn Artificial Intellige...</p>
    <p className='text-xs font-medium text-font'>Empresa repasada</p>
   </div>
   <div className='min-w-80 max-w-80 min-h-10 border border-gray-200 rounded-md p-2 '>
    <p className='text-xs font-medium text-black'>Cheque repassado para compra de novas atualizações no sistema.</p>
   </div>
  </div>
 );
};
export default CheckInfromation;
