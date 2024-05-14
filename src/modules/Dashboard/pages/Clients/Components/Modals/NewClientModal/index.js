import { useState } from 'react';
import { useForm } from 'react-hook-form';

import XClose from '../../../../../../../images/svg/XClose';
import AvatarIcon from '../../../../../../../images/svg/AvatarIcon';
import CamIcon from '../../../../../../../images/svg/CamIcon';

import Button from '../../../../../../../components/Button';
import Input from '../../../../../../../components/Input';

import { useClients } from '../../../../../../../context/ClientsContext';

const NewClientModal = () => {
 const { openNewClient, setOpenNewClient } = useClients();
  const [avatar, setAvatar] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
   } = useForm();

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0])
  };

 const onCloseModal = (e) => {
  if (e.target.id === 'modalContainer') {
    setOpenNewClient(false);
  }
 };

 const handleCreate = async (data) => {
  console.log(data)
};

 return (
  <div className='flex flex-col gap-3'>
       <Button
        name='Cadastrar cliente'
        width='w-[190px]'
        height={'h-12'}
        textColor={'text-white'}
        backgroundColor='bg-primar'
        onClick={() => {
            setOpenNewClient(true);
        }}
       />
   {openNewClient && (
    <div className='w-screen h-screen flex items-center justify-center fixed bg-modal top-0 left-0 z-20' id='modalContainer' onClick={onCloseModal}>
     <form onSubmit={handleSubmit(handleCreate)} className='w-[605px] min-h-[566px] bg-offWhite rounded-3xl z-20 drop-shadow-md shadow-slate-700'>
       
      <div className='flex items-center justify-between p-6'>
        <div className='flex items-center gap-3'>
          <div
            className='cursor-pointer'
            onClick={() => {
              setOpenNewClient(false);
            }}
          >
            <XClose />
          </div>
          <p className='text-lg text-black font-medium'>Novo cliente</p>
        </div>

        <Button name='Criar' width={'w-28'} height={'h-8'} backgroundColor='bg-primar' fontSize={'text-sm'} type='submit' />
      </div>
      <div className='border-t border-border'>
        <div className='flex justify-center py-10'>
          <div className='relative'>
            <label htmlFor='avatar' className='relative cursor-pointer bg-red4 rounded-full overflow-hidden h-24 w-24'>
              {avatar ? <img alt="avatar do cliente" className='w-full h-full object-fill' src={URL.createObjectURL(avatar)} /> : <AvatarIcon className="mx-3 my-2" />}
            </label>
            <div className="absolute bg-primar bottom-1 right-1 rounded-full p-1 border-2 border-white">
              <CamIcon />
            </div>
          </div>
          <input 
            type="file" 
            name="avatar" 
            id="avatar"
            className='hidden'
            onChange={handleAvatarChange} 
          />
        </div>

        <div className='grid grid-cols-2 gap-4 p-6'>
          <div>
            <Input
              label="Razão social"
              error={errors.name}
              placeholder="Insira a razão social"
              validate={{
                required: 'Campo obrigatório!',
              }}
              registerKey={'name'}
              register={register}
            />
            <Input
              label="E-mail do financeiro"
              error={errors.mail}
              placeholder="Insira o e-mail"
              validate={{
                required: 'Campo obrigatório!',
              }}
              registerKey={'mail'}
              register={register}
            />
            <Input
              label="Créditos para compra"
              error={errors.credits}
              placeholder="Insira os creditos"
              validate={{
                required: 'Campo obrigatório!',
              }}
              registerKey={'credits'}
              register={register}
            />
          </div>

          <div>
            <Input
              label="CNPJ"
              error={errors.cnpj}
              placeholder="Insira o CNPJ"
              validate={{
                required: 'Campo obrigatório!',
              }}
              registerKey={'cnpj'}
              register={register}
            />
            <Input
              label="Senha de acesso"
              error={errors.password}
              placeholder="Nova senha"
              validate={{
                required: 'Campo obrigatório!',
              }}
              registerKey={'password'}
              register={register}
            />
          </div>
        </div>
      </div>
     </form>
    </div>
   )}
  </div>
 );
};

export default NewClientModal;
