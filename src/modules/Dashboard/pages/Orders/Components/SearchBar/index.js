import SearchIcon from '.././../../../../../images/svg/SearchIcon';
import Filter from '.././../../../../../images/svg/Filter';

const SearchBar = () => {
 return (
  <div className='flex items-center gap-4'>
   <div className='flex items-center gap-2 border border-gray-200 rounded-3xl p-2.5 w-[300px]'>
    <SearchIcon />
    <input placeholder='Pesquisar' className='text-gray-900 text-sm w-full outline-none' />
   </div>
   <div className='border border-gray-200 rounded-md p-2.5 cursor-pointer'>
    <Filter />
   </div>
  </div>
 );
};
export default SearchBar;
