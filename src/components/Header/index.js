const Header = ({ page, name }) => {
 return (
  <div className='w-full flex items-center justify-between'>
   <div>
    <p className='text-3xl font-semibold text-primar'>{page}</p>
   </div>
   <div className='relative'>
    <img
     className='w-9 h-9 rounded-3xl absolute top-1 left-2 object-cover'
     src='https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/1520/live/bba5af20-c131-11ee-ace0-c35c1b4f6d82.jpg'
    />
    <select name='select' className='border border-gray-200 rounded-3xl text-gray-900 text-sm  focus:border-blue-500 block w-[230px] p-2.5 pl-12'>
     <option value='teste'>{name}</option>
    </select>
   </div>
  </div>
 );
};
export default Header;
