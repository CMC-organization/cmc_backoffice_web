import Logo from '../../images/svg/Logo';

import Cart from '../../images/svg/Cart';
import Products from '../../images/svg/Products';
import Clients from '../../images/svg/Clients';
import Purchase from '../../images/svg/Purchase';
import Access from '../../images/svg/Access';
import Exit from '../../images/svg/Exit';

import { useGlobal } from '../../context/GlobalContext';

const Sidebar = () => {
 const { orders, setOrders, products, setProducts, clients, setClients, purchases, setPurchases, access, setAccess } = useGlobal();

 return (
  <div className='flex flex-col items-start py-12 w-full'>
   <div className='mb-11'>
    <Logo width={138} />
   </div>
   <div className='flex flex-col gap-3'>
    {orders ? (
     <div className='flex items-center gap-3 py-2'>
      <Cart color='#C40024' />
      <p className='text-primar text-base font-medium'>Pedidos</p>
     </div>
    ) : (
     <div
      className='flex items-center gap-3 py-2 cursor-pointer'
      onClick={() => {
       setOrders(true);
       setProducts(false);
       setClients(false);
       setPurchases(false);
       setAccess(false);
      }}
     >
      <Cart color='#787486' />
      <p className='text-font2 text-base font-medium'>Pedidos</p>
     </div>
    )}
    {products ? (
     <div className='flex items-center gap-3 py-2'>
      <Products color='#C40024' />
      <p className='text-primar text-base font-medium'>Produtos</p>
     </div>
    ) : (
     <div
      className='flex items-center gap-3 py-2 cursor-pointer'
      onClick={() => {
       setOrders(false);
       setProducts(true);
       setClients(false);
       setPurchases(false);
       setAccess(false);
      }}
     >
      <Products color='#787486' />
      <p className='text-font2 text-base font-medium'>Produtos</p>
     </div>
    )}
    {clients ? (
     <div className='flex items-center gap-3 py-2'>
      <Clients color='#C40024' />
      <p className='text-primar text-base font-medium'>Clientes</p>
     </div>
    ) : (
     <div
      className='flex items-center gap-3 py-2 cursor-pointer'
      onClick={() => {
       setOrders(false);
       setProducts(false);
       setClients(true);
       setPurchases(false);
       setAccess(false);
      }}
     >
      <Clients color='#787486' />
      <p className='text-font2 text-base font-medium'>Clientes</p>
     </div>
    )}
    {purchases ? (
     <div className='flex items-center gap-3 py-2'>
      <Purchase color='#C40024' />
      <p className='text-primar text-base font-medium'>Compras & Estoque</p>
     </div>
    ) : (
     <div
      className='flex items-center gap-3 py-2 cursor-pointer'
      onClick={() => {
       setOrders(false);
       setProducts(false);
       setClients(false);
       setPurchases(true);
       setAccess(false);
      }}
     >
      <Purchase color='#787486' />
      <p className='text-font2 text-base font-medium'>Compras & Estoque</p>
     </div>
    )}
    {access ? (
     <div className='flex items-center gap-3 py-2'>
      <Access color='#C40024' />
      <p className='text-primar text-base font-medium'>Compras & Estoque</p>
     </div>
    ) : (
     <div
      className='flex items-center gap-3 py-2 cursor-pointer'
      onClick={() => {
       setOrders(false);
       setProducts(false);
       setClients(false);
       setPurchases(false);
       setAccess(true);
      }}
     >
      <Access color='#787486' />
      <p className='text-font2 text-base font-medium'>Compras & Estoque</p>
     </div>
    )}
   </div>
   <div className='flex items-center gap-3 py-2 absolute bottom-[100px] cursor-pointer'>
    <Exit />
    <p>Sair</p>
   </div>
  </div>
 );
};
export default Sidebar;
