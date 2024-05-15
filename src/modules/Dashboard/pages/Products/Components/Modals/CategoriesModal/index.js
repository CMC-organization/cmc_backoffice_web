import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

import CategorysIcon from '../../../../../../../images/svg/CategorysIcon';
import XClose from '../../../../../../../images/svg/XClose';
import PlusRed from '../../../../../../../images/svg/PlusRed';

import { useProducts } from '../../../../../../../context/ProductsContext';
import Button from '../../../../../../../components/Button';
import CategorieCard from '../../CategorieCard';

const CategoriesModal = () => {
 const { openCategories, setOpenCategories } = useProducts();

 const postFilter = () => {};

 const { handleSubmit, control } = useForm();

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
   setOpenCategories(false);
  }
 };

 const [categories, setCategories] = useState([{ name: 'teste' }, { name: 'teste' }]);
 const [newCategories, setNewCategories] = useState([{ name: 'teste' }, { name: 'teste' }]);
 const [editedCategories, setEditedCategories] = useState([{ name: 'teste' }, { name: 'teste' }]);

 useEffect(() => {
  if (Array.isArray(categories)) {
   const edited = categories.filter((category) => category.id);
   setEditedCategories(edited);
  } else {
   setEditedCategories([]);
  }
 }, [categories]);

 const saveCategories = async () => {
  // try {
  //  const token = Cookies.get('@TOKEN');
  //  const createPromises = newCategories.map((category) =>
  //   api.post('/categories', category, {
  //    headers: {
  //     Authorization: `Bearer ${token}`,
  //    },
  //   }),
  //  );
  //  const createdCategoriesResponses = await Promise.all(createPromises);
  //  const createdCategories = createdCategoriesResponses.map((response) => response.data);
  //  const updatePromises = editedCategories.map((category) => {
  //   return (
  //    category.id &&
  //    api.put(`/categories/${category.id}`, category, {
  //     headers: {
  //      Authorization: `Bearer ${token}`,
  //     },
  //    })
  //   );
  //  });
  //  const updatedCategoriesResponses = await Promise.all(updatePromises);
  //  const updatedCategories = updatedCategoriesResponses.map((response) => response.data);
  //  if (createdCategories.length > 0 || updatedCategories.some((p) => p !== null)) {
  //   toast('Categorias salvas com sucesso');
  //   setCategories([...createdCategories, ...updatedCategories]);
  //  }
  // } catch (error) {
  //  toast('Falha ao salvar categorias');
  // }
 };

 //  const handleDelete = (index, type) => {
 //   // if (type === 'edited') {
 //   //  const token = Cookies.get('@TOKEN');
 //   //  const categoryId = editedCategories[index].id;
 //   //  api.delete(`/categories/${categoryId}`, {
 //   //   headers: {
 //   //    Authorization: `Bearer ${token}`,
 //   //   },
 //   //  });
 //   //  setEditedCategories((prevCategories) => prevCategories.filter((category, idx) => idx !== index));
 //   //  toast('Categoria deletada com sucesso');
 //   // } else if (type === 'new') {
 //   //  setNewCategories((prevCategories) => prevCategories.filter((category, idx) => idx !== index));
 //   //  toast('Categoria deletada com sucesso');
 //   // }
 //  };

 const addCategorie = () => {
  setCategories([...categories, { name: '' }]);
 };

 return (
  <div className='flex flex-col gap-3'>
   <div
    className='border border-gray-200 bg-white rounded-md p-2.5 cursor-pointer'
    onClick={() => {
     setOpenCategories(true);
    }}
   >
    <CategorysIcon />
   </div>
   {openCategories && (
    <div className='w-screen h-screen flex items-center justify-center fixed bg-modal  top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
     <div className='w-96 h-[75%] bg-offWhite rounded  z-20 px-6 py-6  drop-shadow-md shadow-slate-700 overflow-y-auto'>
      <form onSubmit={handleSubmit(postFilter)}>
       <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
         <div
          className='cursor-pointer'
          onClick={() => {
           setOpenCategories(false);
          }}
         >
          <XClose />
         </div>
         <p className='text-lg text-black font-medium'>Categorias</p>
        </div>
        <Button name='Salvar' width='w-132' height={'h-8'} textColor={'text-white'} backgroundColor='bg-primar' fontSize={'text-sm'} type='submit' />
       </div>
       <div className='min-w-full min-h-[0.5px] my-3 bg-border' />

       {categories.map((item, i) => (
        <CategorieCard
         label='Nome'
         name={`email${i}`}
         control={control}
         placeholder='Insira a categoria'
         index={i}
         categories={categories}
         setCategories={setCategories}
        />
       ))}
       <div className='flex items-center gap-2 cursor-pointer' onClick={addCategorie}>
        <PlusRed />
        <p className='text-primar font-medium text-base'>Adicionar nova categoria</p>
       </div>
      </form>
     </div>
    </div>
   )}
  </div>
 );
};
export default CategoriesModal;
