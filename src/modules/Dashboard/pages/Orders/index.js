import Button from '../../../../components/Button';
import Header from '../../../../components/Header';
import SidebarLayout from '../../../../layouts/Desktop/SidebarLayout';
import OrdersCard from './Components/OrdersCard';
import SearchBar from './Components/SearchBar';

const Orders = () => {
 return (
  <SidebarLayout
   content={
    <div className='w-full flex flex-col gap-9 '>
     <div className='flex flex-col gap-9'>
      <Header page='Pedidos' name='Teste' />
      <div className='w-full flex justify-between'>
       <SearchBar />
       <Button name='Exportar dados' width='w-[190px]' height={'h-12'} textColor={'text-white'} backgroundColor='bg-primar' type='submit' />
      </div>
     </div>
     <div className='min-w-full max-w-full min-h-full max-h-full'>
      <div className='overflow-x-auto flex flex-col gap-4'>
       <OrdersCard />
       <OrdersCard />
       <OrdersCard />
      </div>
     </div>
    </div>
   }
  />
 );
};
export default Orders;
