import Filter from '.././../../../../../images/svg/Filter';

import { useOrders } from '../../../../../../context/OrdersContext';

const FilterModal = () => {
 const { openFilter, setOpenFilter } = useOrders();

 return (
  <div className='flex flex-col gap-3'>
   <div
    className='border border-gray-200 rounded-md p-2.5 cursor-pointer z-50'
    onClick={() => {
     setOpenFilter(true);
    }}
   >
    <Filter />
   </div>
   {openFilter && (
    <>
     <div
      className='fixed bg-modal w-screen h-screen top-0 left-0 z-10'
      onClick={() => {
       setOpenFilter(false);
      }}
     />
     <div className='min-w-80 min-h-80 bg-offWhite rounded absolute top-44 z-50'></div>
    </>
   )}
  </div>
 );
};
export default FilterModal;
