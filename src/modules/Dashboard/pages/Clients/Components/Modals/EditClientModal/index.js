import { useState } from 'react';
import { useForm } from 'react-hook-form';

import XClose from '../../../../../../../images/svg/XClose';
import AvatarIcon from '../../../../../../../images/svg/AvatarIcon';
import CamIcon from '../../../../../../../images/svg/CamIcon';

import Button from '../../../../../../../components/Button';
import Input from '../../../../../../../components/Input';

import { useClients } from '../../../../../../../context/ClientsContext';
import InputPassword from '../../../../../../../components/InputPassword';

const EditClientModal = () => {
 const { openEdit, setOpenEdit } = useClients();
 const [avatar, setAvatar] = useState(null);

 const {
  handleSubmit,
  control,
  formState: { errors },
 } = useForm();

 const handleAvatarChange = (event) => {
  setAvatar(event.target.files[0]);
 };

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
   setOpenEdit(false);
  }
 };

 const handleEdit = async (data) => {
  console.log(data);
 };

 return (
  openEdit && (
   <div className='w-screen h-screen flex items-center justify-center fixed bg-modal top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
    <form onSubmit={handleSubmit(handleEdit)} className='w-[605px] min-h-[566px] bg-offWhite rounded-3xl z-20 drop-shadow-md shadow-slate-700'>
     <div className='flex items-center justify-between p-6'>
      <div className='flex items-center gap-3'>
       <div
        className='cursor-pointer'
        onClick={() => {
         setOpenEdit(false);
        }}
       >
        <XClose />
       </div>
       <p className='text-lg text-black font-medium'>Editar cliente</p>
      </div>

      <Button name='Editar' width={'w-28'} height={'h-8'} backgroundColor='bg-primar' fontSize={'text-sm'} type='submit' />
     </div>
     <div className='border-t border-border'>
      <div className='flex justify-center py-10'>
       <div className='relative'>
        <label htmlFor='avatar' className='relative cursor-pointer bg-red4 rounded-full overflow-hidden h-24 w-24'>
         {avatar ? (
          <img alt='avatar do cliente' className='w-full h-full object-fill' src={URL.createObjectURL(avatar)} />
         ) : (
          <AvatarIcon className='mx-3 my-2' />
         )}
        </label>
        <div className='absolute bg-primar bottom-1 right-1 rounded-full p-1 border-2 border-white'>
         <CamIcon />
        </div>
        <input type='file' name='avatar' id='avatar' className='hidden' onChange={handleAvatarChange} />
       </div>
      </div>

      <div className='grid grid-cols-2 gap-4 p-6'>
       <div>
        <Input
         label='Razão social'
         name='name'
         control={control}
         placeholder='Insira o e-mail'
         rules={{
          required: 'Campo obrigatório!',
         }}
         error={errors.name}
        />
        <Input
         label='E-mail do financeiro'
         name='email'
         control={control}
         placeholder='Insira o e-mail'
         rules={{
          required: 'Campo obrigatório!',
          pattern: {
           value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
           message: 'E-mail inválido!',
          },
         }}
         error={errors.email}
        />
        <Input
         label='Créditos para compra'
         name='credits'
         control={control}
         placeholder='Insira os creditos'
         rules={{
          required: 'Campo obrigatório!',
         }}
         error={errors.credits}
        />
       </div>

       <div>
        <Input
         label='CNPJ'
         name='cnpj'
         control={control}
         placeholder='Insira o CNPJ'
         rules={{
          required: 'Campo obrigatório!',
         }}
         error={errors.cnpj}
        />
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
       </div>
      </div>
     </div>
    </form>
   </div>
  )
 );
};

export default EditClientModal;
