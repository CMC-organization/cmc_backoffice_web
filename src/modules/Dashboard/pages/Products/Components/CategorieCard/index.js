import Input from '../../../../../../components/Input';

import Trash from '../../../../../../images/svg/Trash';

const CategorieCard = ({
 label,
 name,
 control,
 placeholder,
 index,
 categories,
 setCategories,
 category,
 newCategories,
 editedCategories,
 setNewCategories,
 setEditedCategories,
 //  handleDelete,
}) => {
 const handleDelete = (index) => {
  let categoriesNow = [...categories];

  categoriesNow.splice(index, 1);

  setCategories(categoriesNow);
 };

 return (
  <div className='flex items-center gap-4'>
   <div className='w-12 h-8 rounded-[100%] bg-primar text-white flex items-center justify-center'>
    <p>{index + 1}</p>
   </div>
   <Input label={label} name={name} control={control} placeholder={placeholder} />
   <button onClick={handleDelete}>
    <Trash />
   </button>
  </div>
 );
};
export default CategorieCard;
