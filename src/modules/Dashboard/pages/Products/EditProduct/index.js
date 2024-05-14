import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import ArrowLeft from '../../../../../images/svg/ArrowLeft';

import SidebarLayout from '../../../../../layouts/Desktop/SidebarLayout';
import Header from '../../../../../components/Header';
import Input from '../../../../../components/Input';
import ImagesProduct from '../Components/ImagesProduct';
import Button from '../../../../../components/Button';
import InputSelect from '../../../../../components/InputSelect';

const CreateProducts = () => {
 const {
  handleSubmit,
  control,
  formState: { errors },
 } = useForm();

 const navigate = useNavigate();

 const onSubmit = () => {};

 const categories = [
  { name: 'Joao', code: 'Joao' },
  { name: 'Gustavo', code: 'Gustavo' },
 ];

 return (
  <SidebarLayout
   content={
    <div className='flex flex-col gap-10 pb-10'>
     <div className='flex items-center gap-9'>
      <div
       onClick={() => {
        navigate('/products');
       }}
       className='cursor-pointer'
      >
       <ArrowLeft />
      </div>
      <Header page='Criar produto' name='Teste' />
     </div>
     <form onSubmit={handleSubmit(onSubmit)} className='flex gap-9'>
      <div className='w-1/2 h-full border border-border rounded-xl'>
       <div className='border-b border-border py-3 pl-8'>
        <p className='text-base text-black font-medium'>Informações do produto</p>
       </div>
       <div className='flex flex-col p-7'>
        <Input
         label='Nome do produto *'
         name='name'
         control={control}
         placeholder='Insira o  nome do produto'
         rules={{
          required: 'Campo obrigatório!',
         }}
         error={errors.name}
        />
        <Input
         label='Descrição do produto *'
         name='description'
         control={control}
         placeholder='Insira a descrição do produto'
         rules={{
          required: 'Campo obrigatório!',
         }}
         error={errors.description}
        />
        <div className='flex  justify-between gap-5'>
         <InputSelect label='Categoria *' name='categories' control={control} placeholder='Selecione' options={categories} optionLabel={'name'} />
         <Input label='SKU' name='sku' control={control} placeholder='Insira o SKU do produto' error={errors.sku} />
        </div>
        <div className='flex items-center justify-between gap-5'>
         <Input label='Estoque' name='stock' control={control} placeholder='Insira a QTD em estoque' error={errors.stock} />
         <Input label='Estoque minimo' name='minimun' control={control} placeholder='Insira a QTD mínima' error={errors.minimun} />
        </div>
        <div className='flex items-center justify-between gap-5'>
         <Input label='Peso' name='weigth' control={control} placeholder='Insira o peso do produto' error={errors.weigth} />
         <Input label='Valor base' name='value' control={control} placeholder='Insira o valor base' error={errors.value} />
        </div>
       </div>
      </div>
      <div className='w-1/2 flex flex-col gap-6'>
       <div className='w-full border border-border rounded-xl'>
        <div className='border-b border-border py-3 pl-8'>
         <p className='text-base text-black font-medium'>Conteúdo do produto</p>
        </div>
        <div className='flex flex-col p-7'>
         <div>
          <ImagesProduct />
         </div>
        </div>
       </div>
       <div className='w-full border border-border rounded-xl'>
        <div className='border-b border-border py-3 pl-8'>
         <p className='text-base text-black font-medium'>Variações</p>
        </div>
        <div className='flex flex-col p-7'></div>
       </div>
      </div>
     </form>
     <div className='w-full flex flex-col items-end'>
      <Button
       name='Criar produto'
       width={'w-48'}
       height={'h-10'}
       textColor={'text-white'}
       backgroundColor={'bg-primar'}
       border={'border-border border-1 '}
       onClick={() => {}}
      />
     </div>
    </div>
   }
  />
 );
};
export default CreateProducts;
