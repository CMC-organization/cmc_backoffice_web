import { useNavigate } from 'react-router-dom';

import Access from '../../images/svg/Access';
import Cart from '../../images/svg/Cart';
import Clients from '../../images/svg/Clients';
import Exit from '../../images/svg/Exit';
import Logo from '../../images/svg/Logo';
import Products from '../../images/svg/Products';
import Purchase from '../../images/svg/Purchase';

import { useGlobal } from '../../context/GlobalContext';

const Sidebar = () => {
 const { orders, setOrders, products, setProducts, clients, setClients, purchases, setPurchases, access, setAccess } = useGlobal();
 const navigate = useNavigate();

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
        setClients(false);
       setProducts(false);
       setPurchases(false);
       setAccess(false);
       navigate('/orders');
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
       navigate('/products');
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
       navigate('/clients');
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
