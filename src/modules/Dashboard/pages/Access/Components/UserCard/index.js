import TreePoints from '../../../../../../images/svg/TreePoints';

const UserCard = () => {
 return (
  <div className='w-full h-20 flex items-center justify-between border border-border rounded-lg px-5 py-3'>
   <div className='w-[5%] flex justify-start'>
    <img
     className='w-9 h-9 border-2 border-primar rounded-full object-cover p-0.5'
     src={'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/1520/live/bba5af20-c131-11ee-ace0-c35c1b4f6d82.jpg'}
    />
   </div>
   <div className='w-[30%] text-start font-medium'>Mateus barbosa</div>
   <div className='w-[30%] text-start font-medium'>mateus@startpn.com</div>
   <div className='w-[30%] text-start font-medium'>Dashboard, Pedidos, Produtos, avaliações, gerenciar acessos</div>
   <div className='w-[5%] flex justify-end cursor-pointer'>
    <TreePoints />
   </div>
  </div>
 );
};

export default UserCard;
