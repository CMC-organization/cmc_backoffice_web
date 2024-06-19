import { useForm } from 'react-hook-form';

import XClose from '../../../../../../../images/svg/XClose';
import UserIcon from '../../../../../../../images/svg/UserIcon';
import Camera from '../../../../../../../images/svg/Camera';

import { useAccess } from '../../../../../../../context/AccessContext';
import Button from '../../../../../../../components/Button';
import Input from '../../../../../../../components/Input';
import InputPassword from '../../../../../../../components/InputPassword';
import InputMultSelect from '../../../../../../../components/InputMultSelect';

const UserModal = () => {
 const { setOpenUser } = useAccess();

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

 const onSubmit = (data) => {
  console.log(data);
 };

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
   setOpenUser(false);
  }
 };

 const permissions = [
  { name: 'Joao', code: 'Joao' },
  { name: 'Gustavo', code: 'Gustavo' },
 ];

 return (
  <div className='w-screen h-screen flex items-center justify-center fixed bg-modal  top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
   <form onSubmit={handleSubmit(onSubmit)} className='w-[45%] min-h-80 bg-offWhite rounded  z-20 px-6 py-6  drop-shadow-md shadow-slate-700'>
    <div className='flex items-center justify-between'>
     <div className='flex items-center gap-3'>
      <div
       className='cursor-pointer'
       onClick={() => {
        setOpenUser(false);
       }}
      >
       <XClose />
      </div>
      <p className='text-lg text-black font-medium'>Editar usuário</p>
     </div>
     <Button name='Criar' width='w-28' height={'h-8'} textColor={'text-white'} backgroundColor='bg-primar' fontSize={'text-sm'} type='submit' />
    </div>
    <div className='min-w-full min-h-[0.5px] my-3 bg-border' />
    <div className='w-full flex flex-col items-center justify-center'>
     <div className='py-8 relative cursor-pointer'>
      <div>
       <UserIcon />
      </div>
      <div className='absolute bottom-7 -right-4'>
       <Camera />
      </div>
     </div>
     <div className='w-full flex flex-col gap-8'>
      <div className='w-full flex gap-8 items-center'>
       <Input
        label='Nome do usuário'
        name='name'
        control={control}
        placeholder='Insira o nome'
        rules={{
         required: 'Campo obrigatório!',
        }}
        error={errors.name}
       />
       <Input
        label='E-mail'
        name='email'
        control={control}
        placeholder='Insira o e-mail'
        rules={{
         required: 'Campo obrigatório!',
        }}
        error={errors.email}
       />
      </div>
      <div className='w-full flex gap-8'>
       <InputPassword
        label='Senha'
        name='password'
        control={control}
        placeholder='Iinsira uma senha'
        rules={{
         required: 'Campo obrigatório!',
         minLength: {
          value: 8,
          message: 'Mínimo 8 caracteres!',
         },
        }}
        error={errors.password}
       />
       <InputMultSelect
        label='Permissão'
        name='permissions'
        control={control}
        placeholder='Insira as permissões'
        options={permissions}
        optionLabel='name'
       />
      </div>
     </div>
    </div>
   </form>
  </div>
 );
};
export default UserModal;
