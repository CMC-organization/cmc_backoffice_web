import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import ArrowLeft from '../../../../../images/svg/ArrowLeft';

import Button from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import SidebarLayout from '../../../../../layouts/Desktop/SidebarLayout';
import SearchBar from '../Components/SearchBar';
import CardItemCreate from '../Components/CardItemCreate';
import Variations from '../Components/Variations';

const EditManufacturing = () => {
 const {
  handleSubmit,
  control,
  formState: { errors },
 } = useForm({
  defaultValues: {
   name: '',
   description: '',
   categories: '',
   sku: '',
   stock: '',
   minimun: '',
   weigth: '',
   value: '',
  },
 });

 const navigate = useNavigate();

 const onSubmit = (data) => {
  console.log(data);
 };

 return (
  <SidebarLayout
   content={
    <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col gap-10 pb-10'>
     <div className='flex items-center gap-9'>
      <div
       onClick={() => {
        navigate('/manufacturing');
       }}
       className='cursor-pointer'
      >
       <ArrowLeft />
      </div>
      <Header page='Editar fabricação' name='Teste' />
     </div>
     <div className='flex gap-9'>
      <div className='w-1/2 h-full border border-border rounded-xl'>
       <div className='border-b border-border py-3 pl-8'>
        <p className='text-base text-black font-medium'>Catálogo de produto</p>
       </div>
       <div className='flex flex-col p-7 gap-4'>
        <SearchBar />
        <div className='h-64 overflow-y-auto flex flex-col gap-3'>
         <CardItemCreate />
         <CardItemCreate />
         <CardItemCreate />
         <CardItemCreate />
         <CardItemCreate />
        </div>
       </div>
      </div>
      <div className='w-1/2 h-full border border-border rounded-xl'>
       <div className='border-b border-border py-3 pl-8'>
        <p className='text-base text-black font-medium'>Variações do produto</p>
       </div>
       <div className='flex flex-col p-7 gap-4'>
        <Variations />
       </div>
       <div className='py-3 pl-8'>
        <button className='pb-3' type='button'>
         <span className='text-primar font-medium text-base'>+ Adicionar nova variação</span>
        </button>
       </div>
      </div>
     </div>
     <div className='w-full flex flex-col items-end'>
      <Button
       type={'submit'}
       name='Salvar'
       width={'w-48'}
       height={'h-10'}
       textColor={'text-white'}
       backgroundColor={'bg-primar'}
       border={'border-border border-1 '}
       onClick={() => {}}
      />
     </div>
    </form>
   }
  />
 );
};
export default EditManufacturing;
