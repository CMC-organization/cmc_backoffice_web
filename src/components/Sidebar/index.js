import { useNavigate, useLocation, Link } from 'react-router-dom';

import Access from '../../images/svg/Access';
import Cart from '../../images/svg/Cart';
import Clients from '../../images/svg/Clients';
import Manufacturing from '../../images/svg/Manufacturing';
import Logistics from '../../images/svg/Logistics';
import Exit from '../../images/svg/Exit';
import Logo from '../../images/svg/Logo';
import Products from '../../images/svg/Products';
import Purchase from '../../images/svg/Purchase';
import { cn } from '../../Utils/cn';

const Sidebar = () => {
 const location = useLocation();
 const navigate = useNavigate();

 const logout = () => {
  navigate('/');
 };

 return (
  <div className='flex flex-col items-start py-12 w-full'>
   <div className='mb-11'>
    <Logo width={138} />
   </div>

   <div className='flex flex-col gap-3'>
    <Link
     to='/orders'
     className={cn(
      'flex items-center p-2 rounded-lg text-font2 hover:bg-red4 hover:text-primar',
      location.pathname.includes('orders') && 'text-primar bg-red4',
     )}
    >
     <Cart color='currentColor' />
     <span className='ms-3'>Pedidos</span>
    </Link>

    <Link
     to='/products'
     className={cn(
      'flex items-center p-2 rounded-lg text-font2 hover:bg-red4 hover:text-primar',
      location.pathname.includes('products') && 'text-primar bg-red4',
     )}
    >
     <Products color='currentColor' />
     <span className='ms-3'>Produtos</span>
    </Link>

    <Link
     to='/clients'
     className={cn(
      'flex items-center p-2 rounded-lg text-font2 hover:bg-red4 hover:text-primar',
      location.pathname.includes('clients') && 'text-primar bg-red4',
     )}
    >
     <Clients color='currentColor' />
     <span className='ms-3'>Clientes</span>
    </Link>

    <Link
     to='/manufacturing'
     className={cn(
      'flex items-center p-2 rounded-lg text-font2 hover:bg-red4 hover:text-primar',
      location.pathname.includes('manufacturing') && 'text-primar bg-red4',
     )}
    >
     <Manufacturing color='currentColor' />
     <span className='ms-3'>Fabricação</span>
    </Link>

    <div
     className={cn(
      'flex items-center p-2 rounded-lg text-font2 hover:bg-red4 hover:text-primar',
      location.pathname.includes('logistics') && 'text-primar bg-red4',
     )}
    >
     <Logistics color='currentColor' />
     <span className='ms-3'>Logistica</span>
     <div>
      <div
       to='/logistics'
       className={cn(
        'flex items-center p-2 rounded-lg text-font2 hover:bg-red4 hover:text-primar',
        location.pathname.includes('logistics') && 'text-primar bg-red4',
       )}
      ></div>
     </div>
    </div>

    <Link
     to='/purchases'
     className={cn(
      'flex items-center p-2 rounded-lg text-font2 hover:bg-red4 hover:text-primar',
      location.pathname.includes('purchases') && 'text-primar bg-red4',
     )}
    >
     <Purchase color='currentColor' />
     <span className='ms-3'>Compras & Estoque</span>
    </Link>

    <Link
     to='/access'
     className={cn(
      'flex items-center p-2 rounded-lg text-font2 hover:bg-red4 hover:text-primar',
      location.pathname.includes('access') && 'text-primar bg-red4',
     )}
    >
     <Access color='currentColor' />
     <span className='ms-3'>Gerenciar acessos</span>
    </Link>
   </div>

   <button onClick={logout} className='flex items-center gap-3 py-2 absolute bottom-[100px] cursor-pointer'>
    <Exit />
    <p>Sair</p>
   </button>
  </div>
 );
};

export default Sidebar;
