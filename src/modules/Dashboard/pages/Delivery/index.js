import Shortly from '../../../../images/svg/Shortly';

import SidebarLayout from '../../../../layouts/Desktop/SidebarLayout';

const Delivery = () => {
 return (
  <SidebarLayout
   content={
    <div className='w-full h-full flex flex-col items-center justify-center gap-5'>
     <Shortly />
     <p className='text-2xl text-primar font-medium'>Em breve funcionalidade de entregas</p>
    </div>
   }
  />
 );
};
export default Delivery;
