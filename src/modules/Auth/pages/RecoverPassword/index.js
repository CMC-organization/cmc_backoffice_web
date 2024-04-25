import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import TwoColumnLayout from '../../../../layouts/Desktop/TwoColumnLayout';
import OneColumnLayoutMobile from '../../../../layouts/Mobile/OneColumnLayoutMobile';
import Button from '../../../../components/Button';

import ImageLostPassword from '../../../../images/svg/ImageLostPassword';
import Logo from '../../../../images/svg/Logo';
import InputPassword from '../../../../components/InputPassword';

const RecoverPassword = () => {
 const navigate = useNavigate();
 const isSmartphone = useMediaQuery({ maxWidth: 1024 });

 const {
  handleSubmit,
  register,
  formState: { errors },
 } = useForm();

 const postLostPassword = async (data) => {
    
  navigate('/emailsent');
 };

 return (
  <>
   {isSmartphone ? (
    <OneColumnLayoutMobile
     page={'RecoverPassword'}
     column1={
      <>
       <div className='flex py-10'>
        <Logo width={155} height={61} />
       </div>

       <h2 className='text-font font-boldc text-3xl text-center mb-4'>Esqueceu a senha ?</h2>

       <p className='font-regularc text-font text-base text-center mb-4'>Preencha os campos abaixo com a nova senha que deseja cadastrar</p>

       <form onSubmit={handleSubmit(postLostPassword)} className='flex flex-col items-center'>
        <InputPassword
         label='Senha'
         placeholder='8+ Caracteres'
         registerKey={'password1'}
         register={register}
         error={errors.password1}
         validate={{
          required: 'Campo obrigatório!',
          minLength: {
           value: 8,
           message: 'Mínimo 8 caracteres!',
          },
         }}
        />
        <InputPassword
         label='Senha'
         placeholder='8+ Caracteres'
         registerKey={'password2'}
         register={register}
         error={errors.password2}
         validate={{
          required: 'Campo obrigatório!',
          minLength: {
           value: 8,
           message: 'Mínimo 8 caracteres!',
          },
         }}
        />

        <div className='flex items-center mt-20 flex-col gap-4 w-full'>
         <Button name='Recuperar senha' width={'w-full'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-blue1'} />

         <div className='font-regularc text-font flex items-center'>
          <p
           onClick={() => {
            navigate('/login');
           }}
           className='cursor-pointer'
          >
           Lembrou da senha?
          </p>
         </div>
        </div>
       </form>
      </>
     }
    />
   ) : (
    <TwoColumnLayout
     page={'RecoverPassword'}
     column1={
      <div className='h-full w-full flex items-center justify-center'>
       <ImageLostPassword />
      </div>
     }
     column2={
      <>
       <div className='flex py-10'>
        <Logo width={155} height={61} />
       </div>

       <h2 className='text-font font-boldc text-3xl text-left mb-4'>Esqueceu a senha ?</h2>

       <p className='font-regularc text-font text-base mb-4'>Preencha os campos abaixo com a nova senha que deseja cadastrar</p>

       <form onSubmit={handleSubmit(postLostPassword)} className='flex flex-col'>
        <InputPassword
         label='Senha'
         placeholder='8+ Caracteres'
         registerKey={'password1'}
         register={register}
         error={errors.password1}
         validate={{
          required: 'Campo obrigatório!',
          minLength: {
           value: 8,
           message: 'Mínimo 8 caracteres!',
          },
         }}
        />
        <InputPassword
         label='Senha'
         placeholder='8+ Caracteres'
         registerKey={'password2'}
         register={register}
         error={errors.password2}
         validate={{
          required: 'Campo obrigatório!',
          minLength: {
           value: 8,
           message: 'Mínimo 8 caracteres!',
          },
         }}
        />

        <div className='flex justify-between mt-8 gap-3'>
         <Button name='Recuperar senha' width={'w-52'} height={'h-12'} textColor={'text-white'} backgroundColor={'bg-blue1'} />

         <div className='font-regularc text-font flex items-center'>
          <p
           onClick={() => {
            navigate('/login');
           }}
           className='cursor-pointer'
          >
           Lembrou da senha?
          </p>
         </div>
        </div>
       </form>
      </>
     }
    />
   )}
  </>
 );
};

export default RecoverPassword;