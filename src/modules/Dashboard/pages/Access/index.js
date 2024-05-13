import Button from '../../../../components/Button';
import Header from '../../../../components/Header';
import SidebarLayout from '../../../../layouts/Desktop/SidebarLayout';
import SearchBar from './Components/SearchBar';
import UserCard from './Components/UserCard';

const Access = () => {
 return (
  <SidebarLayout
   content={
    <div className='w-full flex flex-col gap-9'>
     <div className='flex flex-col gap-9'>
      <Header page='Gerenciar acesso' name='Teste' />
      <div className='w-full flex justify-between'>
       <SearchBar />
       <Button
        name='Novo usuário'
        width='w-[190px]'
        height={'h-12'}
        textColor={'text-white'}
        backgroundColor='bg-primar'
        type='submit'
        onClick={() => {}}
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
    </div>
   }
  />
 );
};
export default Access;
