import Header from '../../../../components/Header';
import SidebarLayout from '../../../../layouts/Desktop/SidebarLayout';
import PurchaseModal from './Components/Modals/PurchaseModal';
import RawMaterialCard from './Components/RawMaterialCard';
import SearchBar from './Components/SearchBar';

const Purchases = () => {
 return (
  <SidebarLayout
   content={
    <div>
     <div className='flex flex-col gap-9'>
      <Header page='Materia prima' name='Teste' />
      <div className='w-full flex justify-between'>
       <SearchBar />
       <PurchaseModal />
      </div>
      <div className='min-w-full max-w-full max-h-[480px] overflow-x-hidden overflow-y-auto flex flex-col gap-4 pr-4 pb-8'>
       <RawMaterialCard />
       <RawMaterialCard />
       <RawMaterialCard />
       <RawMaterialCard />
       <RawMaterialCard />
       <RawMaterialCard />
       <RawMaterialCard />
       <RawMaterialCard />
      </div>
     </div>
    </div>
   }
  />
 );
};

export default Purchases;
