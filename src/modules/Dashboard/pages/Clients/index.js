import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button';
import Header from '../../../../components/Header';
import { useClients } from '../../../../context/ClientsContext';
import SidebarLayout from '../../../../layouts/Desktop/SidebarLayout';
import ClientCard from './Components/ClientCard';
import SearchBar from './Components/SearchBar';

const Products = () => {
 const { openApproved } = useClients();
 const navigate = useNavigate();

 return (
  <SidebarLayout
   content={
    <div>
     <div className='flex flex-col gap-9'>
      <Header page='Clientes' name='Teste' />
      <div className='w-full flex justify-between'>
       <SearchBar />
       <Button
        name='Cadastrar cliente'
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
       <ClientCard />
       <ClientCard />
       <ClientCard />
       <ClientCard />
       <ClientCard />
       <ClientCard />
       <ClientCard />
       <ClientCard />
      </div>
     </div>
    </div>
   }
  />
 );
};
export default Products;
