import SearchIcon from '.././../../../../../images/svg/SearchIcon';
import FilterModal from '../FilterModal';

const SearchBar = () => {
 return (
  <div className='flex items-center gap-4'>
   <div className='flex items-center gap-2 border border-gray-200 rounded-3xl p-2.5 w-[300px]'>
    <SearchIcon />
    <input placeholder='Pesquisar' className='text-gray-900 text-sm w-full outline-none' />
   </div>
   <FilterModal />
  </div>
 );
};
export default SearchBar;
