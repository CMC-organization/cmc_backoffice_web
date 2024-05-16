import Input from '../../../../../../components/Input';
import InputMultSelect from '../../../../../../components/InputMultSelect';

import Trash from '../../../../../../images/svg/Trash';

const CouponCard = ({
 control,
 placeholder,
 index,
 categories,
 setCategories,
 options,
 //  handleDelete,
}) => {
 const handleDelete = (index) => {
  let categoriesNow = [...categories];

  categoriesNow.splice(index, 1);

  setCategories(categoriesNow);
 };

 return (
  <div className='flex flex-col items-center'>
   <div className='flex items-center gap-4'>
    <div className='w-12 h-8 rounded-[100%] bg-primar text-white flex items-center justify-center'>
     <p>{index + 1}</p>
    </div>
    <Input label='Nome do cupom' name={`email${index}`} control={control} placeholder={placeholder} />
    <button onClick={handleDelete}>
     <Trash />
    </button>
   </div>
   <div className='w-[200px]'>
    <Input label='Valor de desconto' name={`value${index}`} control={control} placeholder={placeholder} />
   </div>
   <div className='w-[200px]'>
    <InputMultSelect
     label='Produtos inclusos'
     name={`products${index}`}
     control={control}
     placeholder='Insira os produtos'
     options={options}
     optionLabel='name'
    />
   </div>
  </div>
 );
};
export default CouponCard;
