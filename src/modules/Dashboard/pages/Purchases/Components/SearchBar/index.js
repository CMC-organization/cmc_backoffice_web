import SearchIcon from '.././../../../../../images/svg/SearchIcon';

import FilterModal from '../Modals/FilterModal';
import CategoriesModal from '../Modals/CategoriesModal';
import AddSupplierModal from '../Modals/AddSupplierModal';

const SearchBar = () => {
 return (
  <div className='flex items-center gap-4'>
   <div className='flex items-center gap-2 border border-gray-200 rounded-3xl p-2.5 w-[300px]'>
    <SearchIcon />
    <input placeholder='Pesquisar' className='text-gray-900 text-sm w-full outline-none' />
   </div>
   <FilterModal />
   {/* <CategoriesModal />
   <AddSupplierModal /> */}
  </div>
 );
};
export default SearchBar;
