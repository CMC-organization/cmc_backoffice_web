import { useState } from 'react';
import Button from '../../../../components/Button';
import Header from '../../../../components/Header';
import { useAccess } from '../../../../context/AccessContext';
import SidebarLayout from '../../../../layouts/Desktop/SidebarLayout';
import DeleteModal from './Components/Modals/DeleteModal';
import EditDeleteModal from './Components/Modals/EditDeleteModal';
import UserModal from './Components/Modals/UserModal';
import SearchBar from './Components/SearchBar';
import SwitchUsers from './Components/SwitchUsers';
import UserCard from './Components/UserCard';

const Access = () => {
 const { openEditDelete, openDelete, openUser, setOpenUser } = useAccess();

 const [adm, setAdm] = useState(true);
 const [op, setOp] = useState(false);

 return (
  <SidebarLayout
   content={
    <div className='w-full flex flex-col gap-9'>
     <div className='flex flex-col gap-9'>
      <Header page='Gerenciar acesso' name='Teste' />
      <div className='w-full flex justify-between items-center'>
       <SearchBar />
       <SwitchUsers adm={adm} setAdm={setAdm} op={op} setOp={setOp} />
       <Button
        name='Novo usuário'
        width='w-[190px]'
        height={'h-12'}
        textColor={'text-white'}
        backgroundColor='bg-primar'
        type='submit'
        onClick={() => {
         setOpenUser(true);
        }}
       />
      </div>
     </div>
     <div className='min-w-full max-w-full max-h-[480px] overflow-x-hidden overflow-y-auto flex flex-col gap-4 pr-4 pb-16'>
      <div className='w-full flex items-center justify-between px-5 py-3 border border-border rounded-lg'>
       <div className='w-[5%]' />
       <div className='w-[30%] text-font'>Nome do usuário</div>
       <div className='w-[30%] text-font'>E-mail</div>
       <div className='w-[30%] text-font'>Permissão</div>
       <div className='w-[5%]' />
      </div>
      <UserCard />
     </div>
     {openEditDelete && <EditDeleteModal />}
     {openDelete && <DeleteModal />}
     {openUser && <UserModal />}
    </div>
   }
  />
 );
};
export default Access;
