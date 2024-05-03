import XButton from '../../../../../../images/svg/XButton';

const UploadCard = () => {
 return (
  <div className='flex flex-col items-center gap-2 max-w-min'>
   <div className='w-32 h-32 border border-gray-200 rounded-md flex flex-col items-center justify-center relative'>
    <img className='w-4/5 h-5/6' src='https://imgv2-2-f.scribdassets.com/img/document/76269207/original/6977e02535/1713295288?v=1' />
    <div className='absolute -right-3 -top-2 cursor-pointer'>
     <XButton />
    </div>
   </div>
   <p className='text-xs font-medium text-black'>Comprovante.PDF</p>
  </div>
 );
};
export default UploadCard;
