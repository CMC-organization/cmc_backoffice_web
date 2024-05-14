import Input from '../../../../../../components/Input';

import Trash from '../../../../../../images/svg/Trash';

const CategorieCard = ({ index }) => {
 return (
  <div className='flex items-center gap-4'>
   <div className='w-8 h-8 rounded-full bg-primar'>{index}</div>
   <Input label='Nome' name='email' control={control} placeholder='Insira a categoria' />
   <div>
    <Trash />
   </div>
  </div>
 );
};
export default CategorieCard;
