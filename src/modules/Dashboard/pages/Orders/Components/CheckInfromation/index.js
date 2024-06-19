import { useForm } from 'react-hook-form';

import Close from '../../../../../../images/svg/XButton';
import Input from '../../../../../../components/Input';
import InputXL from '../../../../../../components/InputXL';
import Button from '../../../../../../components/Button';

const CheckInfromation = () => {
 const {
  handleSubmit,
  control,
  formState: { errors },
 } = useForm({
  defaultValues: {
   name: '',
   email: '',
   password: '',
   permissions: '',
  },
 });

 const postForm = (data) => {};

 return (
  <form onSubmit={handleSubmit(postForm)} className='w-80 border border-gray-200 rounded-3xl p-3'>
   <div className='flex items-center justify-between'>
    <div className='relative pt-4 pb-4'>
     <img
      className='w-24 h-14 object-cover rounded-md'
      src='https://www.mediamarketing.com.br/cdn/shop/products/Checao.jpg?v=1712952614&width=1445'
     />
     <div class='absolute -top-0 -right-4 cursor-pointer'>
      <Close />
     </div>
    </div>
    <div className='flex flex-col items-center gap-1'>
     <p className='whitespace-nowrap text-xs font-medium text-font'>Status do cheque</p>
     <p className='whitespace-nowrap text-[10px] font-medium text-green1'>Repassado com sucesso</p>
    </div>
   </div>
   <Input
    label='N° do cheque'
    name='number'
    control={control}
    placeholder='Insira o N° do cheque'
    rules={{
     required: 'Campo obrigatório!',
    }}
    error={errors.number}
   />
   <Input
    label='Valor do cheque'
    name='value'
    control={control}
    placeholder='Insira o valor do cheque'
    rules={{
     required: 'Campo obrigatório!',
    }}
    error={errors.value}
   />
   <InputXL
    label='Observações'
    name='comments'
    control={control}
    placeholder='Observações'
    rules={{
     required: 'Campo obrigatório!',
    }}
    error={errors.comments}
   />
   <Button name='Excluir' width={'w-full'} height={'h-10'} textColor={'text-primar'} backgroundColor={'bg-red4'} onClick={() => {}} />
  </form>
 );
};
export default CheckInfromation;
