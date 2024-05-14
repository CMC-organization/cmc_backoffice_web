import Header from '../../../../components/Header';
import SidebarLayout from '../../../../layouts/Desktop/SidebarLayout';
import ClientCard from './Components/ClientCard';
import ActionsModal from './Components/Modals/ActionsModal';
import NewClientModal from './Components/Modals/NewClientModal';
import SearchBar from './Components/SearchBar';
import { useClients } from '../../../../context/ClientsContext';
import DeleteAccessModal from './Components/Modals/DeleteAccessModal';
import EditClientModal from './Components/Modals/EditClientModal';

const Clients = () => {
 const { openActions, openDelete, openEdit } = useClients();

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
     {openActions &&  <ActionsModal />}
     {openDelete &&  <DeleteAccessModal />}
     {openEdit &&  <EditClientModal />}
    </div>
   }
  />
 );
};

export default Clients;
