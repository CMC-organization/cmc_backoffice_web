import Header from '../../../../components/Header';
import SidebarLayout from '../../../../layouts/Desktop/SidebarLayout';
import ClientCard from './Components/ClientCard';
import NewClientModal from './Components/Modals/NewClientModal';
import SearchBar from './Components/SearchBar';

const Clients = () => {
 return (
  <SidebarLayout
   content={
    <div>
     <div className='flex flex-col gap-9'>
      <Header page='Clientes' name='Teste' />
      <div className='w-full flex justify-between'>
       <SearchBar />
       <NewClientModal />
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

export default Clients;
