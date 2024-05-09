import { useNavigate } from 'react-router-dom';

import { useProducts } from '../../../../context/ProductsContext';
import SidebarLayout from '../../../../layouts/Desktop/SidebarLayout';
import Header from '../../../../components/Header';
import SearchBar from './Components/SearchBar';
import Button from '../../../../components/Button';
import ProductCard from './Components/ProductCard';
import EditDeleteModal from './Components/EditDeleteModal';
import DeleteModal from './Components/DeleteModal';

const Products = () => {
 const { openEditDelete, openDelete } = useProducts();
 const navigate = useNavigate();

 return (
  <SidebarLayout
   content={
    <div>
     <div className='flex flex-col gap-9'>
      <Header page='Produtos' name='Teste' />
      <div className='w-full flex justify-between'>
       <SearchBar />
       <Button
        name='Novo produto'
        width='w-[190px]'
        height={'h-12'}
        textColor={'text-white'}
        backgroundColor='bg-primar'
        type='submit'
        onClick={() => {
         navigate('/products/create');
        }}
       />
      </div>
      <div className='min-w-full max-w-full max-h-[480px] overflow-x-hidden overflow-y-auto flex flex-col gap-4 pr-4 pb-8'>
       <ProductCard />
       <ProductCard />
       <ProductCard />
       <ProductCard />
       <ProductCard />
       <ProductCard />
       <ProductCard />
       <ProductCard />
      </div>
     </div>
     {openEditDelete && <EditDeleteModal />}
     {openDelete && <DeleteModal />}
    </div>
   }
  />
 );
};
export default Products;
