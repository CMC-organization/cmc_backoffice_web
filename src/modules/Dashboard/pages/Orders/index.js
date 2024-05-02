import Button from '../../../../components/Button';
import Header from '../../../../components/Header';
import SidebarLayout from '../../../../layouts/Desktop/SidebarLayout';
import SearchBar from './Components/SearchBar';

const Orders = () => {
 return (
  <SidebarLayout
   content={
    <div>
     <div className='flex flex-col gap-12'>
      <Header page='Pedidos' name='Teste' />
      <div className='w-full flex justify-between'>
       <SearchBar />
       <Button name='Exportar dados' width='w-[190px]' height={'h-12'} textColor={'text-white'} backgroundColor='bg-primar' type='submit' />
      </div>
     </div>
    </div>
   }
  />
 );
};
export default Orders;
